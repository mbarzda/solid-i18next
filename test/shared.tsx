import i18next, { InitOptions } from 'i18next';
import { Component } from 'solid-js';
import { renderToString } from 'solid-js/web';
import { render } from 'solid-testing-library';
import { TransProvider } from '../src';

export const messages = {
    custom_interpolation: {
        en: 'Hello ##name##!',
        lt: 'Labas, ##name##!',
        pl: 'Cześć ##name##!',
    },
    interpolation: {
        en: 'Hello {{name}}!',
        lt: 'Labas, {{name}}!',
        pl: 'Cześć {{name}}!',
    },
    simple: {
        en: 'Hello!',
        lt: 'Labas!',
        pl: 'Cześć!',
    },
};

export const resources_lt = {
    translation: {
        greeting: messages.simple.lt,
        greeting_interpolation: messages.interpolation.lt,
        greeting_custom_interpolation: messages.custom_interpolation.lt,
        apples_0: '{{count}} obuolys',
        apples_1: '{{count}} obuoliai',
        apples_2: '{{count}} obuolių',
        tree: {
            greeting: messages.simple.lt,
        },
    },
};

export const resources_pl = {
    translation: {
        greeting: messages.simple.pl,
        greeting_interpolation: messages.interpolation.pl,
        greeting_custom_interpolation: messages.custom_interpolation.pl,
    },
};

export const resources_en = {
    translation: { apples: '{{count}} apple', apples_plural: '{{count}} apples' },
};

export const result = {
    interpolation: { en: 'Hello John Doe!', lt: 'Labas, John Doe!', pl: 'Cześć John Doe!' },
    pluralization: {
        en: {
            one: '1 apple',
            other: '10 apples',
        },
        lt: {
            one: '1 obuolys',
            few: '4 obuoliai',
            other: '10 obuolių',
        },
    },
};

function renderApp(Comp: Component, language?: string, options?: InitOptions) {
    return () => {
        const instance = i18next.createInstance();

        return (
            <TransProvider instance={instance} lng={language} options={options}>
                <Comp />
            </TransProvider>
        );
    };
}

export function renderComponent(Comp: Component, language?: string, options?: InitOptions): string {
    if (global.isNodeEnv) {
        return renderToString(renderApp(Comp, language, options));
    }

    return render(renderApp(Comp, language, options)).container.textContent;
}
