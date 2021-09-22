# Changelog

## 1.1.0

-   Added `i18next@21` as peer and dev dependency. It changed default [pluralization feature](https://www.i18next.com/misc/migration-guide#json-format-v4-pluralization)
    and you may need set `compatibilityJSON` option for `<TransProvider />`.

## 1.0.2

-   Extended `addResources` to support `addResourcesBundle` options
-   Fixed auto import issue with pointing to package's `types` directory instead root
-   Only support i18next versions in range >=20 <21

## 1.0.1

-   Removed default i18next instance in `createTransContext` and `addResources`

## 1.0.0

-   Added `<TransProvider />`
-   Added `useTransContext`
-   Added `<Trans />`
