import { Component } from 'solid-js';
import { render } from 'solid-testing-library';
import { TransProvider, useTransContext } from '../src';

describe('TransProvider', () => {
    it('Should use TransContext', () => {
        const App: Component = () => {
            return (
                <TransProvider>
                    <Custom />
                </TransProvider>
            );
        };
        const Custom: Component = () => {
            expect(useTransContext()).toBeInstanceOf(Array);
            return '';
        };
        render(() => <App />);
    });
});
