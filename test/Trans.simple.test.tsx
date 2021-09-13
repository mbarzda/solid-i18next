import { Trans } from '../src';
import { messages, renderComponent, resources_lt } from './shared';

describe('Trans: Simple', () => {
    const resources = {
        lt: resources_lt,
    };

    function render(language?: string) {
        return renderComponent(() => <Trans key="greeting">{messages.simple.en}</Trans>, language, {
            resources,
        });
    }

    test('Renders default message', () => {
        expect(render(messages.simple.en)).toEqual(messages.simple.en);
    });

    test('Renders translated message', () => {
        expect(render('lt')).toEqual(messages.simple.lt);
    });

    test('Renders fallback message', () => {
        expect(render('pl')).toEqual(messages.simple.en);
    });
});
