# EmptyScreen

A component to show when there is no content to show at the moment in
the screen or list.

All those components can be used together or alone, but prefer the icon
and message, image and message, or only the message, because it was designed
to those usages.

## Usage

```ts
import { View } from "react-native"
import { EmptyScreen } from "react-native-paper-towel"


export function App() {
    return (
        <View style={{ flex: 1 }}>
            <EmptyScreen.Content>
                <EmptyScreen.Icon name={"warning"} />
            </EmptyScreen.Content>
        </View>
    )
}
```

## Docs

### EmptyScreen.Content

The component that fills the screen and contains the icon, image and/or
message.

#### Props

Its props extends `ViewProps`.

| Name | Required | Default value | Description |
|------|----------|---------------|-------------|
`visible` | No | `true` | Whether the component is visible or not. Useful to show/hide the component when a list can be empty.

### EmptyScreen.Icon

The icon that is shown. The difference between `EmptyScreen.Icon` and the
`Icon` from `react-native-paper-towel` is that this one is pre styled for
its usage. Its props are the same as `IconProps` from `react-native-paper-towel`.

### EmptyScreen.Image

The image to be shown. It is pre styled for this usage, so, by default,
the image has a tint color. If you don't want this, pass the prop
`tintColor={undefined}`. Its props are the same as `ImageProps` from
`react-native`.

### EmptyScreen.Message

The text component that shows the message. It is styled for a short message
that briefly describes that the screen is empty, so prefer a short text. Its
props are the same as `TextProps` from `react-native-paper`.
