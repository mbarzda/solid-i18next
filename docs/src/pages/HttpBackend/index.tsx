import { Example, LanguageSwitcher } from '#/components';
import { Trans, TransProvider } from '@mbarzda/solid-i18next';
import i18next, { type InitOptions } from 'i18next';
import HttpBackend from 'i18next-http-backend';
import type { VoidComponent } from 'solid-js';
import { HttpBackendLoadTranslations } from './LoadTranslations';

const HttpBackendPage: VoidComponent = () => {
  const instance = i18next.createInstance();
  instance.use(HttpBackend);

  const options: InitOptions = {
    debug: true,
    fallbackLng: '_en',
    backend: { loadPath: '/solid-i18next/locales/{{lng}}/{{ns}}.json' },
  };

  return (
    <>
      <h2>solid-i18next HttpBackend</h2>
      <p>
        Load translations asynchronously with&nbsp;
        <a href="https://github.com/i18next/i18next-http-backend" target="_blank">
          HttpBackend
        </a>
        .
      </p>
      <section class="section">
        <p>Translations files:</p>
        <Example>
          locales/
          <br />
          ├─ lt/
          <br />
          │ &nbsp;├─ translation.json
          <br />
          ├─ pl/
          <br />
          │ &nbsp;├─ translation.json
          <br />
        </Example>
      </section>
      <section class="section">
        <h3>Default</h3>

        <p>Provide a translation key for Trans component and it will be replaced with value from loaded json file.</p>

        <HttpBackendLoadTranslations></HttpBackendLoadTranslations>
      </section>

      <section class="section">
        <h3>Do not load translation files of default language</h3>
        <TransProvider options={options} instance={instance}>
          <p>Also, you can provide default value and do not load default language's translations.</p>
          <LanguageSwitcher
            active="_en"
            languages={[
              { code: '_en', title: 'English' },
              { code: 'lt', title: 'Lietuvių' },
              { code: 'pl', title: 'Polska' },
            ]}
          />

          <Example translation={<Trans key="greeting">Hi!</Trans>}>
            {`<TransProvider options={{ fallbackLng: 'en' }} instance={instance} children={<App/>} />`}
            <br />
            <br />
            {`<Trans key="greeting">Hi!</Trans>`}
          </Example>
        </TransProvider>
      </section>
    </>
  );
};
export default HttpBackendPage;
