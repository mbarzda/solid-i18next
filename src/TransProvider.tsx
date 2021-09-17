import i18next, { i18n, InitOptions, TFunction, TFunctionKeys, TOptions } from 'i18next';
import { createContext, createSignal, JSXElement, PropsWithChildren, useContext } from 'solid-js';

export interface TransProviderActions {
    addResources(lng: string, ns: string, resources: any): i18n;
    changeLanguage(lng: string): Promise<void>;
    getI18next(): i18n;
}

const TransContext = createContext<[TFunction, TransProviderActions]>();

function createTransContext(instance: i18n, options: InitOptions): [TFunction, TransProviderActions] {
    const [translate, setTranslate] = createSignal<TFunction>(instance.t.bind(instance));

    instance.init(options, (_, t) => setTranslate(() => t));

    async function changeLanguage(lng: string) {
        const t = await instance.changeLanguage(lng);
        setTranslate(() => t);
    }

    function addResources(lng: string, ns: string, resources: any): i18n {
        return instance.addResources(lng, ns, resources);
    }

    return [
        (key: TFunctionKeys, defaultValue?: string, options?: TOptions | string) => {
            return translate()(key, defaultValue, options);
        },
        {
            addResources,
            getI18next: () => instance,
            changeLanguage,
        },
    ];
}

export const useTransContext = () => useContext(TransContext);

export const TransProvider = (
    props: { instance?: i18n; lng?: string; options?: InitOptions } & PropsWithChildren
): JSXElement => {
    return (
        <TransContext.Provider
            value={createTransContext(
                props.instance || i18next,
                Object.assign({ lng: props.lng, resources: {} }, props.options)
            )}
            children={props.children}
        />
    );
};
