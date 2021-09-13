import { renderToString } from 'solid-js/web';

import { Trans, TransProvider } from '../../src';
import { messages, resources_lt } from '../shared';

describe('Trans component', () => {
    const resources = {
        lt: resources_lt,
    };

    describe('Render simple message', () => {
        function renderCustom(language?: string): string {
            return renderToString(() => (
                <TransProvider lng={language} options={{ resources }}>
                    <Trans key="greeting">{messages.simple.en}</Trans>
                </TransProvider>
            ));
        }

        test('Renders default message', () => {
            expect(renderCustom()).toEqual(messages.simple.en);
        });

        test('Renders translated message', () => {
            expect(renderCustom('lt')).toEqual(messages.simple.lt);
        });

        test('Renders fallback message', () => {
            expect(renderCustom('pl')).toEqual(messages.simple.en);
        });
    });

    describe('Interpolation', () => {
        function renderDefault(language?: string): string {
            return renderToString(() => (
                <TransProvider lng={language} options={{ resources }}>
                    <Trans key="greeting_interpolation" options={{ name: 'Mr. X' }}>
                        {messages.interpolation.en}
                    </Trans>
                </TransProvider>
            ));
        }

        function renderCustom(language?: string): string {
            const interpolation = { prefix: '##', suffix: '##' };
            return renderToString(() => (
                <TransProvider lng={language} options={{ interpolation, resources }}>
                    <Trans key="greeting_custom_interpolation" options={{ name: 'Mr. X' }}>
                        {messages.custom_interpolation.en}
                    </Trans>
                </TransProvider>
            ));
        }

        const result = { en: 'Hello Mr. X!', lt: 'Labas, Mr. X!' };

        test('Renders default interpolation message', () => {
            expect(renderDefault()).toEqual(result.en);
        });

        test('Renders default interpolation translated message', () => {
            expect(renderDefault('lt')).toEqual(result.lt);
        });

        test('Renders custom interpolation message', () => {
            expect(renderCustom()).toEqual(result.en);
        });

        test('Renders custom interpolation translated message', () => {
            expect(renderCustom('lt')).toEqual(result.lt);
        });
    });
});
