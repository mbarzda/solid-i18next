import type { TOptions } from 'i18next';
import { children, type ParentComponent } from 'solid-js';
import { useTransContext } from './TransProvider';
import { translateJSX } from './utils/translate-jsx';

export type TransProps = { key: string; options?: TOptions };

export const Trans: ParentComponent<TransProps> = (props) => {
  const [t, { getI18next }] = useTransContext();

  return (
    <>
      {typeof props.children === 'string'
        ? t(props.key, props.children, props.options)
        : translateJSX({ i18n: getI18next(), t, props }, children(() => props.children)() as Node[])}
    </>
  );
};
