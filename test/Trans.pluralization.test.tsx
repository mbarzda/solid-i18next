import { Trans } from '../src';
import { renderComponent, resources_en, resources_lt, result } from './shared';

describe('Trans: Pluralization', () => {
  const resources = {
    en: resources_en,
    lt: resources_lt,
  };

  function renderCount(count: number, language: string) {
    return renderComponent(() => <Trans key="apples" options={{ count }} />, language, { resources });
  }

  describe('English', () => {
    test('Render one', () => {
      expect(renderCount(1, 'en')).toEqual(result.pluralization.en.one);
    });

    test('Render other', () => {
      expect(renderCount(10, 'en')).toEqual(result.pluralization.en.other);
    });
  });

  describe('Lithuanian', () => {
    test('Render one', () => {
      expect(renderCount(1, 'lt')).toEqual(result.pluralization.lt.one);
    });

    test('Render few', () => {
      expect(renderCount(4, 'lt')).toEqual(result.pluralization.lt.few);
    });

    test('Render other', () => {
      expect(renderCount(10, 'lt')).toEqual(result.pluralization.lt.other);
    });
  });
});
