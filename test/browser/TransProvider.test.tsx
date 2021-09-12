import { Component } from 'solid-js';
import { render } from 'solid-testing-library';
import { TransProvider, useTransContext } from '../../src';
import { messages, resources_lt } from '../shared';

describe('TransProvider component', () => {
    function renderComponent(Comp: Component) {
        render(() => <TransProvider children={<Comp />} />);
    }

    it('Should use TransContext', () => {
        renderComponent(() => {
            expect(useTransContext()).toBeInstanceOf(Array);
            return '';
        });
    });

    describe('Add resources', () => {
        it('Should be defined', () => {
            renderComponent(() => {
                const [, actions] = useTransContext();
                expect(actions.addResources).toBeDefined();
                return '';
            });
        });

        it('Adds resources', () => {
            renderComponent(() => {
                const [, actions] = useTransContext();
                actions.addResources('lt', 'translation', resources_lt.translation);
                expect(actions.getI18next().getResource('lt', 'translation', 'greeting')).toEqual(messages.lt);
                return '';
            });
        });
    });
});
