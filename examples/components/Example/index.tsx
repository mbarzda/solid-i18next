import { Component, createSignal, JSXElement, Show } from 'solid-js';
import { useTransContext } from '@mbarzda/solid-i18next';
import { changed, code, translated, translatedSup } from './styles.module.css';

type ExampleProps = { translation?: JSXElement };

const TranslatedText: Component<ExampleProps> = (props) => {
    const [_, { getI18next }] = useTransContext();
    const [isLanguageChanged, setIsLanguageChanged] = createSignal(false);
    getI18next().on('languageChanged', () => {
        setIsLanguageChanged(true);
        setTimeout(() => setIsLanguageChanged(false), 1000);
    });
    return (
        <p class={translated} classList={{ [changed]: isLanguageChanged() }}>
            {props.children} <sup class={translatedSup}>Rendered</sup>
        </p>
    );
};

export const Example: Component<ExampleProps> = (props) => {
    return (
        <>
            <Show when={!!props.translation}>
                <TranslatedText children={props.translation} />
            </Show>

            <code class={code} children={props.children} />
        </>
    );
};
