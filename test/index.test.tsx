import i18next from 'i18next';
import { Component } from 'solid-js';
import { render } from 'solid-testing-library';

import { Trans, TransProvider } from '../src';

describe('Render translations', () => {
    const msg_en = 'Hello!';
    const msg_lt = 'Labas!';
    const resources = {
        lt: {
            translation: {
                greeting_message: msg_lt,
            },
        },
    };

    let App: Component;
    let Custom: Component;
    let lng: string;

    beforeEach(() => {
        App = (props) => {
            i18next.init({ resources });

            return props.children;
        };
        Custom = () => (
            <TransProvider lng={lng}>
                <Trans key="greeting_message">{msg_en}</Trans>
            </TransProvider>
        );
    });

    it('Renders default message', () => {
        const { getByText } = render(() => <App children={<Custom />} />);
        expect(getByText(msg_en)).toEqual(<div>{msg_en}</div>);
    });

    it('Renders translated message', () => {
        lng = 'lt';
        const { getByText } = render(() => <App children={<Custom />} />);
        expect(getByText(msg_lt)).toEqual(<div>{msg_lt}</div>);
    });

    it('Renders fallback message', () => {
        lng = 'pl';
        const { getByText } = render(() => <App children={<Custom />} />);
        expect(getByText(msg_en)).toEqual(<div>{msg_en}</div>);
    });
});
