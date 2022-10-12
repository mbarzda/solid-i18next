# Changelog

## 1.1.8

- Update dependencies.
- Update types.

## 1.1.7

- Update devDependencies.
- Define `TransProviderActions` as type.

## 1.1.6

- Update peerDependencies.

## 1.1.5

- Update dependencies.
- Update types.

## 1.1.4

- Fix still persisting i18next warning.

## 1.1.3

- Fix warning throw, when translation are not loaded with HttpBackend #13.
- Add examples application.
- Update dependencies.

## 1.1.2

- Update dependencies.

## 1.1.1

- Update dependencies.

## 1.1.0

- Added `i18next@21` as peer and dev dependency. It changed default [pluralization feature](https://www.i18next.com/misc/migration-guide#json-format-v4-pluralization)
  and you may need set `compatibilityJSON` option for `<TransProvider />`.

## 1.0.2

- Extended `addResources` to support `addResourcesBundle` options
- Fixed auto import issue with pointing to package's `types` directory instead root
- Only support i18next versions in range >=20 <21

## 1.0.1

- Removed default i18next instance in `createTransContext` and `addResources`

## 1.0.0

- Added `<TransProvider />`
- Added `useTransContext`
- Added `<Trans />`
