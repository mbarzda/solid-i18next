import i18next, { i18n, InitOptions, TFunction, TFunctionKeys, TOptions } from 'i18next';
import { createContext, createSignal, JSXElement, PropsWithChildren, useContext } from 'solid-js';

export interface TransProviderActions {
    addResources(lng: string, ns: string, resources: any): i18n;
    changeLanguage(lng: string): Promise<void>;
    getI18next(): i18n;
}

const TransContext = createContext<[TFunction, TransProviderActions]>();

function createTransContext(lng: string, instance: i18n): [TFunction, TransProviderActions] {
    const [trans, setTrans] = createSignal<TFunction>(i18next.t.bind(i18next));

    async function changeLanguage(lng: string) {
        const t = await instance.changeLanguage(lng);
        setTrans(() => t);
    }

    function addResources(lng: string, ns: string, resources: any): i18n {
        return instance.addResources(lng, ns, resources);
    }

    if (lng) changeLanguage(lng);

    return [
        (key: TFunctionKeys, defaultValue?: string, options?: TOptions | string) => {
            return trans()(key, defaultValue, options);
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
    props: { lng?: string; instance?: i18n; options?: InitOptions } & PropsWithChildren
): JSXElement => {
    const instance = props.instance || i18next;
    instance.init(props.options);

    const context = createTransContext(props.options?.lng || props.lng, instance);

    return <TransContext.Provider value={context}>{props.children}</TransContext.Provider>;
};
