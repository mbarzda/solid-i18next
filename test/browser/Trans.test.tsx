import { render } from 'solid-testing-library';

import { Trans, TransProvider } from '../../src';
import { messages, messages_custom_interpolation, messages_interpolation, resources_lt } from '../shared';

describe('Trans component', () => {
    const resources = {
        lt: resources_lt,
    };

    describe('Render simple message', () => {
        function renderCustom(queryValue: string, language?: string): HTMLElement {
            return render(() => (
                <TransProvider lng={language} options={{ resources }}>
                    <Trans key="greeting">{messages.en}</Trans>
                </TransProvider>
            )).getByText(queryValue) as HTMLElement;
        }

        it('Renders default message', () => {
            expect(renderCustom(messages.en).textContent).toEqual(messages.en);
        });

        it('Renders translated message', () => {
            expect(renderCustom(messages.lt, 'lt').textContent).toEqual(messages.lt);
        });

        it('Renders fallback message', () => {
            expect(renderCustom(messages.en, 'pl').textContent).toEqual(messages.en);
        });
    });

    describe('Interpolation', () => {
        function renderDefault(queryValue: string, language?: string): HTMLElement {
            return render(() => (
                <TransProvider lng={language} options={{ resources }}>
                    <Trans key="greeting_interpolation" options={{ name: 'Mr. X' }}>
                        {messages_interpolation.en}
                    </Trans>
                </TransProvider>
            )).getByText(queryValue, { exact: false }) as HTMLElement;
        }

        function renderCustom(queryValue: string, language?: string): HTMLElement {
            const interpolation = { prefix: '##', suffix: '##' };
            return render(() => (
                <TransProvider lng={language} options={{ interpolation, resources }}>
                    <Trans key="greeting_custom_interpolation" options={{ name: 'Mr. X' }}>
                        {messages_custom_interpolation.en}
                    </Trans>
                </TransProvider>
            )).getByText(queryValue, { exact: false }) as HTMLElement;
        }

        it('Renders default interpolation message', () => {
            expect(renderDefault('Hello').textContent).toEqual('Hello Mr. X!');
        });

        it('Renders default interpolation translated message', () => {
            expect(renderDefault('Labas', 'lt').textContent).toEqual('Labas, Mr. X!');
        });

        it('Renders custom interpolation message', () => {
            expect(renderCustom('Hello').textContent).toEqual('Hello Mr. X!');
        });

        it('Renders custom interpolation translated message', () => {
            expect(renderCustom('Labas', 'lt').textContent).toEqual('Labas, Mr. X!');
        });
    });
});
