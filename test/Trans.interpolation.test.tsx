import { Trans } from '../src';
import { messages, renderComponent, resources_lt, result } from './shared';

describe('Trans: Interpolation', () => {
  const resources = {
    lt: resources_lt,
  };

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
      expect(renderDefault()).toEqual(result.interpolation.en);
    });

    test('Renders interpolation translated message', () => {
      expect(renderDefault('lt')).toEqual(result.interpolation.lt);
    });

    test('Renders as textNode', () => {
      expect(
        renderComponent(() => (
          <Trans key="greeting_interpolation" options={{ name: 'John Doe' }}>
            {'Hello {{ name }}!'}
          </Trans>
        ))
      ).toEqual(result.interpolation.en);
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
      expect(renderCustom()).toEqual(result.interpolation.en);
    });

    test('Renders interpolation translated message', () => {
      expect(renderCustom('lt')).toEqual(result.interpolation.lt);
    });

    test('Renders as textNode', () => {
      expect(
        renderComponent(
          () => (
            <Trans key="greeting_custom_interpolation" options={{ name: 'John Doe' }}>
              {'Hello ##name##!'}
            </Trans>
          ),
          undefined,
          { interpolation, resources: {} }
        )
      ).toEqual(result.interpolation.en);
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
      expect(renderDefault()).toEqual(result.interpolation.en);
    });
  });
});
