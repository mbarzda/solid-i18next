import i18next, { i18n, InitOptions, TFunction, TFunctionKeys, TOptions } from 'i18next';
import { createContext, createSignal, ParentComponent, useContext } from 'solid-js';

export type TransProviderActions = {
  addResources(lng: string, ns: string, resources: any): i18n;
  changeLanguage(lng: string): Promise<void>;
  getI18next(): i18n;
};

const TransContext = createContext<[TFunction, TransProviderActions]>();

function createTransContext(instance: i18n, options: InitOptions): [TFunction, TransProviderActions] {
  const [translate, setTranslate] = createSignal<TFunction>(!!options.resources ? instance.t : () => null);

  instance.on('loaded', () => setTranslate(() => instance.t));
  instance.init(options, (_, t) => setTranslate(() => t));

  async function changeLanguage(lng: string) {
    const t = await instance.changeLanguage(lng);
    setTranslate(() => t);
  }

  function addResources(
    lng: string,
    ns: string,
    resources: any,
    bundleOptions: { deep?: boolean; overwrite?: boolean } = {}
  ): i18n {
    return instance.addResourceBundle(lng, ns, resources, bundleOptions.deep, bundleOptions.overwrite);
  }

  return [
    (key: TFunctionKeys, defaultValue?: string, options?: TOptions | string) => translate()(key, defaultValue, options),
    {
      addResources,
      getI18next: () => instance,
      changeLanguage,
    },
  ];
}

export const useTransContext = () => useContext(TransContext);

export const TransProvider: ParentComponent<{ instance?: i18n; lng?: string; options?: InitOptions }> = (props) => {
  return (
    <TransContext.Provider
      value={createTransContext(props.instance || i18next, { lng: props.lng, ...props.options })}
      children={props.children}
    />
  );
};
