import { Trans, TransProvider } from '@mbarzda/solid-i18next';
import { Component } from 'solid-js';
import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';
import { LanguageSwitcher } from '../components/LanguageSwitcher';

export const HttpBackendPage: Component = () => {
    i18next.use(HttpBackend);
    return (
        <TransProvider options={{ debug: true, resources: undefined, fallbackLng: 'en' }}>
            <h2>solid-i18next HttpBackend</h2>
            <LanguageSwitcher />
            <p>
                <Trans key="greeting" />
            </p>
        </TransProvider>
    );
};
