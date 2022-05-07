import { render } from 'solid-js/web';
import { Router } from 'solid-app-router';

import { Header, Main } from './components';
import { app } from './styles.module.css';

render(() => {
  return (
    <Router>
      <div class={app}>
        <Header />
        <Main />
      </div>
    </Router>
  );
}, document.body);
