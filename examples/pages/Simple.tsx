import { Trans, TransProvider } from '@mbarzda/solid-i18next';
import { InitOptions } from 'i18next';
import { Component } from 'solid-js';
import { LanguageSwitcher } from '../components/LanguageSwitcher';

export const SimplePage: Component = () => {
    const options: InitOptions = {
        lng: 'en',
        resources: { lt: { translation: { greeting: 'Labas!' } } },
    };

    return (
        <TransProvider options={options}>
            <h2>Simple</h2>
            <LanguageSwitcher />
            <p>
                <Trans key="greeting">Hello!</Trans>
            </p>
        </TransProvider>
    );
};
