import i18next, { InitOptions } from 'i18next';
import { Component } from 'solid-js';
import { render } from 'solid-testing-library';
import { TransProvider } from '../../src';

export function renderComponent(Comp: Component, language?: string, options?: InitOptions): HTMLElement {
    return render(() => {
        const instance = i18next.createInstance();

        return (
            <TransProvider instance={instance} lng={language} options={options}>
                <Comp />
            </TransProvider>
        );
    }).container;
}
