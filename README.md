# react-native-paper-towel

A component library that extends `react-native-paper`. It adds often used
components that are not available in `react-native-paper` and adds components
that are available, but with slight different style or pre configured props.

Its objective is to avoid repeating the same code across applications and
simplify frequent usages. To achieve this, the library implements, for example,
the `InputPassword` component. Its the `TextInput` component from
`react-native-paper`, but configured to be used as a password input with the
commonly used props for this case.

## Installation

To install the library, run:

```sh
npm install react-native-paper-towel
# or
yarn add react-native-paper-towel
```

This library requires `react-native-paper`, `react-material-design-provider`
and `react-native-vector-icons`. Follow their installation guide:

- [`react-native-paper`](https://callstack.github.io/react-native-paper/docs/guides/getting-started)
- [`react-material-design-provider`](https://github.com/viniciusyoshioka/react-material-design-provider)
- [`react-native-vector-icons`](https://github.com/oblador/react-native-vector-icons)

**Attention**: The `react-native-vector-icons` used in this library is not from
NPM or from the original repository. It uses a fork that implements variants
for Google's Material Icon. So, when installing vector icons, install the
library from the forked repository (https://github.com/viniciusyoshioka/react-native-vector-icons).

Install the required libraries with:

```sh
npm install react-native-paper react-material-design-provider https://github.com/viniciusyoshioka/react-native-vector-icons.git
# or
yarn add react-native-paper react-material-design-provider https://github.com/viniciusyoshioka/react-native-vector-icons.git
```

## Docs

### Components

- [`EmptyScreen`](./src/components/EmptyScreen/README.md)
- [`Icon`](./src/components/Icon/README.md)
- [`Input`](./src/components/Input/README.md)
- [`InputHeader`](./src/components/InputHeader/README.md)
- [`InputPassword`](./src/components/InputPassword/README.md)
- [`LoadingModal`](./src/components/LoadingModal/README.md)
- [`Pressable`](./src/components/Pressable/README.md)

### Hooks

- [`useModal`](./src/hooks/useModal/README.md)
