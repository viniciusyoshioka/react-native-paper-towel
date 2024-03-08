# Icon

Its an extension of `react-native-vector-icons`. It joins, in one component,
some icon packages that can be chosen through `group` prop.

## Usage

```tsx
import { Icon } from "react-native-paper-towel"


export function App() {
    return (
        <Icon
            name={"settings"}
            group={"material"}
            size={32}
        />
    )
}
```

## Docs

### IconGroup

Type that defines the icon groups supported by the library.

### IconProps

Type of Icon props. It extends the `IconProps` from `react-native-vector-icons`.

The differences between the props is that this `IconProps` has some additional
properties or other default values:

| Prop | Required | Default value | Description |
|------|----------|---------------|-------------|
`group` | No | `material-community` | Chooses which icon package to use. Its type is [`IconGroup`](#icongroup)
`size` | No | 24 | Size of the icon


### OptionalIconProps

A version of [`IconProps`](#iconprops) where all properties are optional. It
is used by other components that uses the [`Icon`](#icon-component) component
but the icon is optional or cutomizable.

### Icon component

The Icon component. Its props are defined by [`IconProps`](#iconprops).
