import { Example, LanguageSwitcher } from '$/components';
import { Trans, TransProvider } from '@mbarzda/solid-i18next';
import i18next, { InitOptions } from 'i18next';
import { VoidComponent } from 'solid-js';

const NestedPage: VoidComponent = () => {
  const options: InitOptions = {
    debug: true,
    lng: 'en',
    resources: {
      lt: { translation: { greeting_nested: '<0>Sveiki, {{fullName}}! </0><1>Tavo profilis</1>.' } },
    },
  };

  return (
    <TransProvider options={options} instance={i18next.createInstance()}>
      <h2>Nested</h2>
      <p>Set resources through TransProvider options:</p>
      <Example>{`<TransProvider options={ resources: { lt: { translation: { greeting_nested: '<0>Sveiki, {{fullName}}! </0><1>Tavo profilis</1>.' } } } />`}</Example>

      <LanguageSwitcher />

      <Example
        translation={
          <Trans key="greeting_nested" options={{ fullName: 'John Doe' }}>
            {'Hello {{ fullName }}! '}
            <a href="/profile">Your Profile</a>.
          </Trans>
        }
      >
        {`<Trans key="greeting_nested" options={{ fullName: 'John Doe' }}> {'Hello {{ fullName }}! '} <a href="/profile">Your Profile</a>. </Trans>`}
      </Example>
    </TransProvider>
  );
};

export default NestedPage;
