# i18next for Solid

The purpose of this library is to provide ability to support **i18next** internationalization library in Solid applications.

## Usage

Installation:

```sh
npm install @mbarzda/solid-i18next i18next --save
```

### Simple Example

`<TransProvider />` must wrap Solid application's most parent component (e.g. `<App />`). `<Trans />` component's' `key` property is mandatory.

Default value can be wrapped with `<Trans />` component or set with `options` property.

```tsx
// esm
import { TransProvider, Trans } from '@mbarzda/solid-i18next';

// cjs
const { TransProvider, Trans } = require('@mbarzda/solid-i18next');

render(() => (
    <TransProvider>
        <App>
            <Trans key="greeting" />
            {/* or */}
            <Trans key="greeting">Hello!</Trans>
            {/* or */}
            <Trans key="greeting" options={{defaultValue: 'Hello! }} />
            {/* or */}
            <Trans key="greeting" options="Hello!" />
        </App>
    </TransProvider>
));
```

### i18next Modules

**i18next** has many modules. They can be loaded with `use` method. There is need to have an `i18next` instance.

There is possible to use default `i18next` instance or create separate instance.

`<TransProvider />` initializes **i18next** (`i18next.init()`) under the hood, so you need create an instance before the component initializes.

Modules options and other **i18next** options must be provided with `options` property.

```tsx
import { TransProvider, Trans } from '@mbarzda/solid-i18next';
import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';

// Use modules with default instance.
render(() => {
    i18next.use(HttpBackend);
    const backend = { backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' } };

    return (
        <TransProvider options={{ backend }}>
            <App>
                <Trans key="greeting">Hello!</Trans>
            </App>
        </TransProvider>
    );
});

// Use modules with separate instance.
// New instance must be provided to `TransProvider` with `instance` property.
render(() => {
    const instance = i18next.createInstance();
    instance.use(HttpBackend);
    const backend = { backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' } };

    return (
        <TransProvider instance={instance} options={{ backend }}>
            <App>
                <Trans key="greeting">Hello!</Trans>
            </App>
        </TransProvider>
    );
});
```

### Add Resources

Resources can be added on initialization with `options` property in `<TransProvider />` or
by calling `addResources` method from `TransContext`, which can be got with `useTransContext()`.

```tsx
import { Trans, TransProvider, useTransContext } from '@mbarzda/solid-18next';

const resources = {
    lt: {...},
    pl: {...},
};

render(() => <TransProvider options={{ resources }} children={<App />} />, container);

{/* or */}

const Component = () => {
    const [, actions] = useTransContext();
    actions.addResources('lt', 'translation', resources.lt);
    actions.addResources('pl', 'translation', resources.pl);

    return <Trans key="greeting">Hello!</Trans>;
};
```

### Change a Language

Default language can be provided to `<TransProvider />` with `lng` or `options` property.

`options.lng` overrides `lng` property value.

```tsx
<TransProvider lng="lt" children={...} />
<TransProvider options={{lng: 'pl'}} children={...} />
```

To change language you need to use `TransContext` and call `changeLanguage`.

```tsx
import { useTransContext } from '@mbarzda/solid-18next';

const Component = () => {
    const [, actions] = useTransContext();
    function changeLanguage(lng: string) {
        return () => actions.changeLanguage(lng);
    }

    return (
        <article>
            <button type="button" onClick={changeLanguage('en')}>
                English
            </button>
            <button type="button" onClick={changeLanguage('lt')}>
                Lietuvių
            </button>
        </article>
    );
};
```

### T Function

**i18next** `t` function is essential and sometimes there is need to use it without component. `TransContext` provides it in case you need it.

```tsx
const Component = () => {
    const [t] = useTransContext();
    return isLogin() ? t('greeting', 'Hello!') : t('bye', 'Bye!');
};
```

### i18next Instance

If there is need something more than this library provides for **i18next**, you can get i18next instance from `TransContext` and to do something with it.
If you are using default instance, you also can use `i18next` global.

```tsx
const Component = () => {
    const [, actions] = useTransContext();
    actions.getI18next().on('loaded', () => {...});
    {/* or, if using default instance */}
    i18next.on('loaded', () => {...})
    return <></>;
};
```
