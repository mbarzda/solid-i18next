import { Trans } from '../../src';
import { messages, resources_lt } from '../shared';
import { renderComponent } from './common';

describe('Trans: Interpolation', () => {
    const resources = {
        lt: resources_lt,
    };
    const result = { en: 'Hello John Doe!', lt: 'Labas, John Doe!', pl: 'Cześć John Doe!' };

    describe('Default', () => {
        function renderDefault(language?: string) {
            return renderComponent(
                () => (
                    <Trans key="greeting_interpolation" options={{ name: 'John Doe' }}>
                        {messages.interpolation.en}
                    </Trans>
                ),
                language,
                { resources }
            );
        }

        test('Renders interpolation message', () => {
            expect(renderDefault().textContent).toEqual(result.en);
        });

        test('Renders interpolation translated message', () => {
            expect(renderDefault('lt').textContent).toEqual(result.lt);
        });

        test('Renders as textNode', () => {
            expect(
                renderComponent(() => (
                    <Trans key="greeting_custom_interpolation" options={{ name: 'John Doe' }}>
                        Hello {{ name }}
                    </Trans>
                ))
            );
        });
    });

    describe('Custom', () => {
        const interpolation = { prefix: '##', suffix: '##' };

        function renderCustom(language?: string) {
            return renderComponent(
                () => (
                    <Trans key="greeting_custom_interpolation" options={{ name: 'John Doe' }}>
                        {messages.custom_interpolation.en}
                    </Trans>
                ),
                language,
                { interpolation, resources }
            );
        }

        test('Renders interpolation message', () => {
            expect(renderCustom().textContent).toEqual(result.en);
        });

        test('Renders interpolation translated message', () => {
            expect(renderCustom('lt').textContent).toEqual(result.lt);
        });

        test('Renders as textNode', () => {
            expect(
                renderComponent(() => (
                    <Trans key="greeting_custom_interpolation" options={{ name: 'John Doe' }}>
                        Hello ##name##
                    </Trans>
                ))
            );
        });
    });

    describe('After language change', () => {
        function renderDefault(language?: string) {
            return renderComponent(
                () => (
                    <Trans key="greeting_interpolation" options={{ name: 'John Doe' }}>
                        {messages.interpolation.en}
                    </Trans>
                ),
                language,
                { resources }
            );
        }

        test('Renders interpolation message', () => {
            expect(renderDefault().textContent).toEqual(result.en);
        });
    });
});
