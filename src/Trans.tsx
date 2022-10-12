import { TFunctionKeys, TOptions } from 'i18next';
import { FlowComponent } from 'solid-js';
import { useTransContext } from './TransProvider';

export const Trans: FlowComponent<{ key: TFunctionKeys; options?: TOptions | string }, string> = (props) => {
  const [t] = useTransContext();
  return <>{t(props.key, props.children, props.options)}</>;
};
