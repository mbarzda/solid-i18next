import { TFunctionKeys, TOptions } from 'i18next';
import { useTransContext } from './TransProvider';

export const Trans = (props: { key: TFunctionKeys; children?: string; options?: TOptions | string }) => {
    const [t] = useTransContext();
    return t(props.key, props.children, props.options);
};
