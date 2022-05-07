import { render } from 'solid-js/web';

import { Header, Main } from './components';
import { app } from './styles.module.css';

render(() => {
  return (
    <div class={app}>
      <Header />
      <Main />
    </div>
  );
}, document.body);
