import { i18n } from 'i18next';
import { JSXElement } from 'solid-js';
import { renderToString } from 'solid-js/web';
import { render } from 'solid-testing-library';
import { TransProvider, useTransContext } from '../src';
import { messages, renderComponent, resources_lt } from './shared';

describe('TransProvider component', () => {
    test('Should use TransContext', () => {
        renderComponent(() => {
            expect(useTransContext()).toBeInstanceOf(Array);
            return '';
        });
    });

    describe('Instance must be the same', () => {
        function renderApp(fn: () => JSXElement) {
            if (global.isNodeEnv) {
                renderToString(fn);
            } else {
                render(fn);
            }
        }

        let i18next: i18n;
        beforeEach(async () => {
            i18next = (await import('i18next')).default;
        });

        test('Default', () => {
            const Comp = () => {
                const [, { getI18next }] = useTransContext();
                expect(getI18next().store).toStrictEqual(i18next.store);
                return <></>;
            };
            renderApp(() => <TransProvider children={<Comp />} />);
        });

        test('New instance', () => {
            let instance: i18n;
            const Comp = () => {
                const [, { getI18next }] = useTransContext();
                expect(getI18next().store).toStrictEqual(instance.store);
                return <></>;
            };
            renderApp(() => {
                instance = i18next.createInstance();
                return <TransProvider instance={instance} children={<Comp />} />;
            });
        });
    });

    describe('Add resources', () => {
        test('Should be defined', () => {
            renderComponent(() => {
                const [, actions] = useTransContext();
                expect(actions.addResources).toBeDefined();
                return '';
            });
        });

        test('Adds resources', () => {
            renderComponent(() => {
                const [, actions] = useTransContext();
                actions.addResources('lt', 'translation', resources_lt.translation);
                expect(actions.getI18next().getResource('lt', 'translation', 'greeting')).toEqual(messages.simple.lt);
                expect(actions.getI18next().getResource('lt', 'translation', 'tree.greeting')).toEqual(
                    messages.simple.lt
                );
                return '';
            });
        });
    });

    describe('Change language', () => {
        test('Changes language', () => {
            renderComponent(() => {
                const [, actions] = useTransContext();
                actions.changeLanguage('lt');
                expect(actions.getI18next().language).toEqual('lt');
                return '';
            });
        });
    });
});
