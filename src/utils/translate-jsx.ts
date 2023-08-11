import type { i18n, TFunction } from 'i18next';
import type { ParentProps } from 'solid-js';
import type { TransProps } from '../Trans';
import { replaceElements } from './replace-elements';
import { translateWithInterpolation } from './translate-with-interpolation';
import { parse } from 'html-parse-string';

export const parseHTML = parse;

export const translateJSX = (
  { i18n: { options }, t, props }: { t: TFunction; props: ParentProps<TransProps>; i18n: i18n },
  children: Node[]
) => {
  const translation = t(props.key, props.options);

  if (!props.children) return translation;

  if (translation === props.key) return children.map(translateWithInterpolation(t, options, props));

  try {
    const [ast] = parseHTML(`<0>${translation}</0>`);
    return children.map(replaceElements(ast, options));
  } catch {
    console.error(
      'In order to use JSX nesting, install %chtml-parse-string',
      'font-weight: 700',
      'https://github.com/ryansolid/html-parse-string.'
    );
  }
};
