import { TFunctionKeys } from 'i18next';
import { useTransContext } from './TransProvider';

export const Trans = (props: { key: TFunctionKeys; children?: string }) => {
    const [t] = useTransContext();
    return t(props.key, props.children);
};
