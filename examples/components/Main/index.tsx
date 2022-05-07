import { Component, Index } from 'solid-js';
import { NavLink, useRoutes } from 'solid-app-router';
import { link, linkActive, main, navigation, opened } from './styles.module.css';
import { Route, routes } from '$/routes';
import { navigationSignal } from '$/signals';

export const Main: Component = () => {
  const Routes = useRoutes(routes);
  const [isOpened, setOpened] = navigationSignal;

  const links = [
    { href: Route.Simple, title: 'Simple' },
    { href: Route.HttpBackend, title: 'HttpBackend' },
  ];
  document.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape') setOpened(false);
  });

  return (
    <>
      <nav class={navigation} classList={{ [opened]: isOpened() }}>
        <Index each={links}>
          {(item) => (
            <NavLink class={link} activeClass={linkActive} href={item().href} onclick={() => setOpened(false)}>
              {item().title}
            </NavLink>
          )}
        </Index>
      </nav>
      <section class={main} children={Routes}></section>
    </>
  );
};
