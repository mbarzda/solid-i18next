# i18next for Solid

The purpose of this library is to provide ability to support [i18next](https://i18next.com/) library in Solid applications
with `<TranProvider />` and `<Trans />` components.

## Table of Contents

1. [Usage](#usage)
    1. [Simple Example](#simple-example)
    1. [Add Resources](#add-resources)
    1. [Change a Language](#change-a-language)
    1. [T Function](#t-function)
    1. [i18next Modules](#i18next-modules)
    1. [i18next Instance](#i18next-instance)
1. [Interpolation](#interpolation)
    1. [Pluralization](#pluralization)
1. [API](#api)

## Usage

Installation:

```sh
npm install @mbarzda/solid-i18next i18next --save
```

### Simple Example

`<TransProvider />` must wrap Solid application's most parent component (e.g. `<App />`). `<Trans />` component's `key` property is mandatory.

Default value can be wrapped with `<Trans />` component or set with `options` or `children` property.

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
            <Trans key="greeting" options={{ defaultValue: 'Hello!' }} />
            {/* or */}
            <Trans key="greeting" options="Hello!" />
            {/* or */}
            <Trans key="greeting" children="Hello!" />
        </App>
    </TransProvider>
));
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

`options.lng` overrides `lng` property.

```tsx
<TransProvider lng="lt" children={...} />
<TransProvider options={{lng: 'pl'}} children={...} />
```

To change a language you need to use `TransContext` and call `changeLanguage`.

```tsx
import { useTransContext } from '@mbarzda/solid-18next';

const Component = () => {
    const [, { changeLanguage }] = useTransContext();

    return (
        <article>
            <button type="button" onClick={() => changeLanguage('en')}>
                English
            </button>
            <button type="button" onClick={() => changeLanguage('lt')}>
                Lietuvių
            </button>
        </article>
    );
};
```

### T Function

**i18next** have `t` function, which is essential and sometimes there is need to use it without `<Trans />` component.
`TransContext` provides it in case you need it.

```tsx
const Component = () => {
    const [t] = useTransContext();
    const messages = {
        get greeting() {
            return t('greeting', 'Hello!');
        },
        get bye() {
            return t('bye', 'Bye!');
        },
    };

    return <>{isLogin() ? messages.greeting : messages.bye}</>;
};
```

### i18next Modules

**i18next** has [many modules](https://www.i18next.com/overview/plugins-and-utils).
They can be loaded with `use` method. There is need to have an `i18next` instance.

There is possible to use default `i18next` instance or create a separate one.

`<TransProvider />` initializes **i18next** (`i18next.init()`) under the hood, so you need to create an instance before the component initializes.

Modules options and other **i18next** options must be provided with `options` property.

```tsx
import { TransProvider, Trans } from '@mbarzda/solid-i18next';
import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';

// Use modules with default instance.
render(() => {
    i18next.use(HttpBackend);

    const backend = { loadPath: '/locales/{{lng}}/{{ns}}.json' };

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

    const backend = { loadPath: '/locales/{{lng}}/{{ns}}.json' };

    return (
        <TransProvider instance={instance} options={{ backend }}>
            <App>
                <Trans key="greeting">Hello!</Trans>
            </App>
        </TransProvider>
    );
});
```

### i18next Instance

If there is need something more than this library provides, you can get **i18next** instance from `TransContext` and to do something with it.
If you are using default instance, you also can use `i18next` global.

```tsx
const Component = () => {
    const [, { getI18next }] = useTransContext();
    getI18next().on('loaded', () => {...});

    {/* or, if you are using default instance */}

    i18next.on('loaded', () => {...});

    return <></>;
};
```

## Interpolation

Default interpolation uses `{{` and `}}` as prefix and suffix. Solid uses `{` and `}` for properties propagation. In that case
messages with default interpolation must be put as string. Placeholder values should be provided
through `options` property of `<Trans />` component.

```tsx
<Trans key="greeting" options={{ name: 'John Doe' }}>
    {'Hello {{name}}!'}
</Trans>
```

**i18next** also allows to define custom interpolation prefix and suffix.

```tsx
const resources = { lt: { greeting: 'Labas, ##name##!' } };
const interpolation = { prefix: '##', suffix: '##' };

<TransProvider options={{ interpolation, resources }}>
    <Trans key="greeting" options={{ name: 'John Doe' }}>
        Hello ##name##!
    </Trans>
</TransProvider>;
```

### Pluralization

**i18next** provides default [pluralization feature](https://www.i18next.com/translation-function/plurals),
but that may be inconsistent through different languages
and you would prefer something like [ICU format](https://unicode-org.github.io/icu/userguide/format_parse/messages/).

For that case I would recommend [i18next-icu](https://github.com/i18next/i18next-icu) plugin. Note, that default interpolation would change.

```tsx
import i18next from 'i18next';
import ICU from 'i18next-icu';

const instance = i18next.createInstance();
instance.use(ICU);

const resources = {
    lt: {
        photos: 'Tu { numPhotos, select, 0 {neturi nuotraukų} other { turi { numPhotos, plural, one {# nuotrauką} few {# nuotraukas} other {# nuotraukų} }}}.'
    }
}

<TransProvider instance={instance} options={{ resources }}>
    <Trans key="photos" options={{ numPhotos: 10 }}>
        {'You have {numPhotos, plural, =0 {no photos} =1 {one photo} other {# photos}}.'}
    </Trans>
</TransProvider>;
```

## API

`<TransProvider />`

| Property | Description                                                                                      | Required |
| -------- | ------------------------------------------------------------------------------------------------ | -------- |
| instance | i18next instance, see: [i18n](https://www.i18next.com/overview/api)                              | No       |
| lng      | language, `options.lng` overrides it                                                             | No       |
| options  | i18next init options, see: [InitOptions](https://www.i18next.com/overview/configuration-options) | No       |

`useTransContext` function returns the array. The first item is `t` function, second - the list of actions: `[TFunction, TransProviderActions]`.

`TransProviderActions`

| Function       | Description                                                                    |
| -------------- | ------------------------------------------------------------------------------ |
| addResources   | adds translation resources                                                     |
| changeLanguage | changes language and sets new t function                                       |
| getI18next     | returns **i18next** instance, see [i18n](https://www.i18next.com/overview/api) |

`<Trans />`

| Property | Description                                                                                                     | Required |
| -------- | --------------------------------------------------------------------------------------------------------------- | -------- |
| key      | translation key or keys [TFunctionKeys](https://www.i18next.com/translation-function/essentials)                | Yes      |
| options  | t function's options, see: [TOptions](https://www.i18next.com/translation-function/essentials#overview-options) | No       |
