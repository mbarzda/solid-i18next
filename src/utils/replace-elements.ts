// @ts-ignore
import { IDom } from 'html-parse-string';
import { InitOptions } from 'i18next';
import { hasInterpolation } from './has-interpolation';

export const replaceElements =
  (ast: IDom, { interpolation }: InitOptions) =>
  (child: Node, index: number) => {
    if (typeof child === 'string') {
      if (hasInterpolation(child, interpolation)) return ast.children[index].children?.[0].content;

      return ast.children[index].content;
    }

    child.textContent = ast.children[index].children?.[0].content;

    return child;
  };
