import { navigationSignal } from '$/signals';
import { Component } from 'solid-js';
import { github, header, heading, menu, opened } from './styles.module.css';

export const Header: Component = () => {
  const [isOpened, setOpened] = navigationSignal;

  return (
    <header class={header}>
      <button
        class={menu}
        classList={{ [opened]: isOpened() }}
        type="button"
        onclick={() => setOpened(!isOpened())}
      ></button>
      <h1 class={heading}>
        @mbarzda/solid-i18next / Examples{' '}
        <a class={github} href="https://github.com/mbarzda/solid-i18next">
          Github
        </a>
      </h1>
    </header>
  );
};
