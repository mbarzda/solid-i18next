import { useTransContext } from '@mbarzda/solid-i18next';
import { Show, children, createSignal, type JSXElement, type ParentComponent } from 'solid-js';
import { changed, code, translated, translatedSup } from './styles.module.css';

const TranslatedText: ParentComponent = (props) => {
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

export const Example: ParentComponent<{ translation?: JSXElement }> = (props) => {
  const getTranslation = children(() => props.translation);
  return (
    <>
      <Show when={!!getTranslation()}>
        <TranslatedText children={getTranslation()} />
      </Show>

      <code class={code} children={props.children} />
    </>
  );
};
