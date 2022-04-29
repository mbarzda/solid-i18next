import { Trans, TransProvider } from '@mbarzda/solid-i18next';
import { Component } from 'solid-js';
import i18next, { InitOptions } from 'i18next';
import HttpBackend from 'i18next-http-backend';
import { Example, LanguageSwitcher } from '$/components';

export const HttpBackendPage: Component = () => {
    const instance = i18next.createInstance();
    instance.use(HttpBackend);

    const options: InitOptions = {
        debug: true,
        fallbackLng: 'en',
    };

    return (
        <TransProvider options={options} instance={instance}>
            <h2>solid-i18next HttpBackend</h2>
            <p>
                Load translations asynchronously with&nbsp;
                <a href="https://github.com/i18next/i18next-http-backend" target="_blank">
                    HttpBackend
                </a>
                .
            </p>
            <Example>
                {`const instance = i18next.createInstance();
                instance.use(HttpBackend);`}
                <br />
                <br />
                {`return (<TransProvider options={{
                debug: true,
                fallbackLng: 'en'
            }} instance={instance} children={<App/>} />)`}
            </Example>

            <LanguageSwitcher />
            <Example translation={<Trans key="greeting" />}>{'<Trans key="greeting">Hello!</Trans>'}</Example>
        </TransProvider>
    );
};
