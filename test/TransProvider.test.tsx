import { useTransContext } from '../src';
import { messages, renderComponent, resources_lt } from './shared';

describe('TransProvider component', () => {
    test('Should use TransContext', () => {
        renderComponent(() => {
            expect(useTransContext()).toBeInstanceOf(Array);
            return '';
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
