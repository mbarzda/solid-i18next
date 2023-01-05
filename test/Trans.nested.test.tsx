import { Trans } from '../src';
import { renderComponent } from './shared';

describe('Trans: Nested', () => {
  const resources = {
    lt: {
      translation: {
        greeting_nested: '<0>Sveiki, {{fullName}}! </0><1>Tavo profilis</1>.',
        greeting_nested_multi: '<0>Sveiki, {{fullName}}! </0><1>Žinutės ({{messages}})</1>.',
      },
    },
  };

  function render(language?: string, multiInterpolation = false) {
    return renderComponent(
      () =>
        multiInterpolation ? (
          <Trans key="greeting_nested_multi" options={{ fullName: 'John Doe', messages: 5 }}>
            {'Hello {{ fullName }}! '}
            <a href="/profile">{'Messages ({{messages}})'}</a>.
          </Trans>
        ) : (
          <Trans key="greeting_nested" options={{ fullName: 'John Doe' }}>
            {'Hello {{ fullName }}! '}
            <a href="/profile">Your Profile</a>.
          </Trans>
        ),
      language,
      {
        resources,
      }
    );
  }

  describe('English', () => {
    test('Renders default message', () => {
      const result = render();
      expect(result).toContain('Hello John Doe!');
      expect(result).toContain('href="/profile"');
    });

    test('Renders messages count', () => {
      const result = render(undefined, true);
      expect(result).toContain('Hello John Doe!');
      expect(result).toContain('Messages (5)');
    });
  });

  describe('Lithuanian', () => {
    test('Renders translated message', () => {
      const result = render('lt');
      expect(result).toContain('Sveiki, John Doe!');
      expect(result).toContain('href="/profile"');
    });
  });
});
