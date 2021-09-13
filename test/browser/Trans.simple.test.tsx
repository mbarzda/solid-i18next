import { Trans } from '../../src';
import { messages, resources_lt } from '../shared';
import { renderComponent } from './common';

describe('Trans: Simple', () => {
    const resources = {
        lt: resources_lt,
    };

    function render(language?: string) {
        return renderComponent(() => <Trans key="greeting">{messages.simple.en}</Trans>, language, { resources });
    }

    test('Renders default message', () => {
        expect(render(messages.simple.en).textContent).toEqual(messages.simple.en);
    });

    test('Renders translated message', () => {
        expect(render('lt').textContent).toEqual(messages.simple.lt);
    });

    test('Renders fallback message', () => {
        expect(render('pl').textContent).toEqual(messages.simple.en);
    });
});
