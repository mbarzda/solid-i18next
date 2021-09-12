import { renderToString } from 'solid-js/web';

import { Trans, TransProvider } from '../../src';
import { messages, messages_custom_interpolation, messages_interpolation, resources_lt } from '../shared';

describe('Trans component', () => {
    const resources = {
        lt: resources_lt,
    };

    describe('Render simple message', () => {
        function renderCustom(language?: string): string {
            return renderToString(() => (
                <TransProvider lng={language} options={{ resources }}>
                    <Trans key="greeting">{messages.en}</Trans>
                </TransProvider>
            ));
        }

        it('Renders default message', () => {
            expect(renderCustom()).toEqual(messages.en);
        });

        it('Renders translated message', () => {
            expect(renderCustom('lt')).toEqual(messages.lt);
        });

        it('Renders fallback message', () => {
            expect(renderCustom('pl')).toEqual(messages.en);
        });
    });

    describe('Interpolation', () => {
        function renderDefault(language?: string): string {
            return renderToString(() => (
                <TransProvider lng={language} options={{ resources }}>
                    <Trans key="greeting_interpolation" options={{ name: 'Mr. X' }}>
                        {messages_interpolation.en}
                    </Trans>
                </TransProvider>
            ));
        }

        function renderCustom(language?: string): string {
            const interpolation = { prefix: '##', suffix: '##' };
            return renderToString(() => (
                <TransProvider lng={language} options={{ interpolation, resources }}>
                    <Trans key="greeting_custom_interpolation" options={{ name: 'Mr. X' }}>
                        {messages_custom_interpolation.en}
                    </Trans>
                </TransProvider>
            ));
        }

        it('Renders default interpolation message', () => {
            expect(renderDefault()).toEqual('Hello Mr. X!');
        });

        it('Renders default interpolation translated message', () => {
            expect(renderDefault('lt')).toEqual('Labas, Mr. X!');
        });

        it('Renders custom interpolation message', () => {
            expect(renderCustom()).toEqual('Hello Mr. X!');
        });

        it('Renders custom interpolation translated message', () => {
            expect(renderCustom('lt')).toEqual('Labas, Mr. X!');
        });
    });
});
