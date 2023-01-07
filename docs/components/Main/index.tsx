import { Accessor, createEffect, createSignal, Index, lazy, VoidComponent } from 'solid-js';
import { link, linkActive, main, navigation, opened } from './styles.module.css';

import { navigationSignal } from '../../signals';

export const Main: VoidComponent = () => {
  const [isOpened, setOpened] = navigationSignal;
  const [active, setActive] = createSignal('Simple');
  const [page, setPage] = createSignal();

  const links = [
    { path: 'Simple', title: 'Simple' },
    { path: 'Nested', title: 'Nested' },
    { path: 'HttpBackend', title: 'HttpBackend' },
  ];
  document.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape') setOpened(false);
  });

  createEffect(() => {
    let page: VoidComponent;
    switch (active()) {
      case 'Simple':
        page = lazy(() => import('../../pages/Simple'));
        break;
      case 'HttpBackend':
        page = lazy(() => import('../../pages/HttpBackend'));
        break;
      case 'Nested':
        page = lazy(() => import('../../pages/Nested'));
        break;
    }
    setPage(page);
  });

  function onClick(item: Accessor<typeof links[0]>, event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    setActive(item().path);
  }

  return (
    <>
      <nav class={navigation} classList={{ [opened]: isOpened() }}>
        <Index each={links}>
          {(item) => (
            <a
              href="#"
              class={link}
              classList={{ [linkActive]: active() === item().path }}
              onClick={(event) => onClick(item, event)}
            >
              {item().title}
            </a>
          )}
        </Index>
      </nav>
      <section class={main} children={page() as any}></section>
    </>
  );
};
