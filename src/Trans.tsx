import { TFunctionKeys, TOptions } from 'i18next';
import { JSXElement } from 'solid-js';
import { useTransContext } from './TransProvider';
import HTML from 'html-parse-stringify';

type FunctionalJSXElement = ((data: Record<string, string>) => JSXElement);
interface TransProps { 
  key: TFunctionKeys; 
  options?: TOptions | string;
  children: JSXElement | FunctionalJSXElement; 
}

export const Trans = (props: TransProps) => {
  const [t] = useTransContext();

  const result = () => {
    const translation = t(props.key, props.options);
    const ast = HTML.parse(`<0>${translation}</0>`)[0].children;
    const data = {};
    ast.forEach(component => {
      if (component.type !== "tag") return;
      data[component.name] = component.children[0].content;
    });
    return (props.children as FunctionalJSXElement)(data);
  }

  return (
    <>{
      typeof props.children === "string" ? t(props.key, props.children, props.options) : result() 
    }</>
  );
};
