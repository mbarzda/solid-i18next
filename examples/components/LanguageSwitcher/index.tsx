import { useTransContext } from '@mbarzda/solid-i18next';
import { Component, createSignal, Index } from 'solid-js';
import { button, buttonActive } from './styles.module.css';

export const LanguageSwitcher: Component<{ languages?: { code: string; title: string }[]; active?: string }> = (
    props
) => {
    const languages = props.languages ?? [
        { code: 'en', title: 'English' },
        { code: 'lt', title: 'Lietuvių' },
    ];
    const [, { changeLanguage }] = useTransContext();
    const [lang, setLang] = createSignal(props.active ?? 'en');

    const onClick = async (code: string) => {
        await changeLanguage(code);
        return setLang(code);
    };

    return (
        <section>
            <article>
                Change language:
                <Index each={languages}>
                    {(language) => (
                        <button
                            class={button}
                            classList={{ [buttonActive]: lang() === language().code }}
                            onclick={() => onClick(language().code)}
                            type="button"
                        >
                            {language().title}
                        </button>
                    )}
                </Index>
            </article>
        </section>
    );
};
