import { Component, createSignal, JSXElement, Show } from 'solid-js';
import { useTransContext } from '@mbarzda/solid-i18next';
import { changed, code, translated } from './styles.module.css';

export const Example: Component<{ translation?: JSXElement }> = (props) => {
    const [_, { getI18next }] = useTransContext();
    const [isLanguageChanged, setIsLanguageChanged] = createSignal(false);
    getI18next().on('languageChanged', () => {
        setIsLanguageChanged(true);
        setTimeout(() => setIsLanguageChanged(false), 1000);
    });

    return (
        <>
            <Show when={!!props.translation}>
                <p class={translated} classList={{ [changed]: isLanguageChanged() }}>
                    {props.translation}
                </p>
            </Show>

            <code class={code}>{props.children}</code>
        </>
    );
};
