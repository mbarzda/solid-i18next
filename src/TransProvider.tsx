import i18next, { TFunction, TFunctionKeys, TOptions } from 'i18next';
import { createContext, createSignal, JSXElement, PropsWithChildren, useContext } from 'solid-js';

const TransContext = createContext<[TFunction, any]>();

export const useTransContext = () => useContext(TransContext);

function createTransContext(lng?: string): [TFunction, any] {
    const [trans, setTrans] = createSignal<TFunction>(i18next.t.bind(i18next));

    async function changeLanguage(lng: string) {
        const t = await i18next.changeLanguage(lng);
        setTrans(() => t);
    }

    function addResources(lng: string, ns: string, resources: any) {
        i18next.addResources(lng, ns, resources);
    }

    if (lng) changeLanguage(lng);

    return [
        (key: TFunctionKeys, defaultValue?: string, options?: TOptions | string) => {
            return trans()(key, defaultValue, options);
        },
        {
            addResources,
            changeLanguage,
        },
    ];
}

export const TransProvider = (props: { lng?: string } & PropsWithChildren): JSXElement => {
    const context = createTransContext(props.lng);

    return <TransContext.Provider value={context}>{props.children}</TransContext.Provider>;
};
