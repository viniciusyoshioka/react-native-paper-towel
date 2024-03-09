# LoadingModal

A modal component to show when the screen must be blocked and the user must
wait it finishes.

## Usage

```ts
import { View } from "react-native"
import { LoadingModal } from "react-native-paper-towel"


export function App() {
    return (
        <View style={{ flex: 1 }}>
            <LoadingModal
                visible={true}
                message={"Loading..."}
            />
        </View>
    )
}
```

## Docs

### LoadingModal component

The modal component. When it is visible, is not possible to dismiss. You must
show and hide it programmatically. Be carefull to not forget to hide when the
action is done. Its props is [`LoadingModalProps`](#loadingmodalprops)

### LoadingModalProps

The props of [`LoadingModal`](#loadingmodal-component).

| Name | Required | Description |
|------|----------|-------------|
visible | Yes | Whether the modal is visible or not
message | Yes | The text to show in modal
