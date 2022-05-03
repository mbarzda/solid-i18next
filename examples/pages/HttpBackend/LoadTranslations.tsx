import { Example, LanguageSwitcher } from '$/components';
import { Trans, TransProvider } from '@mbarzda/solid-i18next';
import i18next, { InitOptions } from 'i18next';
import { Component } from 'solid-js';
import HttpBackend from 'i18next-http-backend';

export const HttpBackendLoadTranslations: Component = () => {
    const instance = i18next.createInstance();
    instance.use(HttpBackend);

    const options: InitOptions = {
        debug: true,
        fallbackLng: 'en',
    };
    return (
        <TransProvider options={options} instance={instance}>
            <LanguageSwitcher />

            <Example translation={<Trans key="greeting" />}>{'<Trans key="greeting" />'}</Example>

            <Example>
                {`const instance = i18next.createInstance();
        instance.use(HttpBackend);`}
                <br />
                <br />
                {`return (<TransProvider options={{
        debug: true,
    }} instance={instance} children={<App/>} />)`}
            </Example>
        </TransProvider>
    );
};
