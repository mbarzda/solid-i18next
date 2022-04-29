import { LanguageSwitcher } from '$/components';
import { Example } from '$/components/Example';
import { Trans, TransProvider } from '@mbarzda/solid-i18next';
import i18next, { InitOptions } from 'i18next';
import { Component } from 'solid-js';

export const SimplePage: Component = () => {
    const options: InitOptions = {
        debug: true,
        lng: 'en',
        resources: { lt: { translation: { greeting: 'Sveiki!' } } },
    };

    return (
        <TransProvider options={options} instance={i18next.createInstance()}>
            <h2>Simple</h2>
            <p>Set resources through TransProvider options:</p>
            <Example>
                {"<TransProvider options={ resources: { lt: { translation: { greeting: 'Sveiki!' } } } } />"}
            </Example>

            <LanguageSwitcher />
            <Example translation={<Trans key="greeting">Hello!</Trans>}>
                {' <Trans key="greeting">Hello!</Trans> '}
            </Example>
        </TransProvider>
    );
};
