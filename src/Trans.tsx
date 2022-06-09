import { TFunctionKeys, TOptions } from 'i18next';
import { Component } from 'solid-js';
import { useTransContext } from './TransProvider';

export const Trans: Component<{ children?: string; key: TFunctionKeys; options?: TOptions | string }> = (props) => {
  const [t] = useTransContext();
  return <>{t(props.key, props.children, props.options)}</>;
};
