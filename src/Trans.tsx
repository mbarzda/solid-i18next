import { TFunctionKeys } from 'i18next';
import { useTransContext } from '.';

export const Trans = (props: { key: TFunctionKeys; children?: string }) => {
    const [t] = useTransContext();
    return t(props.key, props.children);
};
