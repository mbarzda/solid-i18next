import { Example, LanguageSwitcher } from '#/components';
import { Trans, TransProvider } from '@mbarzda/solid-i18next';
import i18next, { type InitOptions } from 'i18next';
import type { VoidComponent } from 'solid-js';

const SimplePage: VoidComponent = () => {
  const options: InitOptions = {
    debug: true,
    lng: 'en',
    resources: { lt: { translation: { greeting: 'Sveiki!' } } },
  };

  return (
    <TransProvider options={options} instance={i18next.createInstance()}>
      <h2>Simple</h2>
      <p>Set resources through TransProvider options:</p>
      <Example>{"<TransProvider options={ resources: { lt: { translation: { greeting: 'Sveiki!' } } } } />"}</Example>

      <LanguageSwitcher />
      <Example translation={<Trans key="greeting">Hello!</Trans>}>{' <Trans key="greeting">Hello!</Trans> '}</Example>
    </TransProvider>
  );
};
export default SimplePage;
