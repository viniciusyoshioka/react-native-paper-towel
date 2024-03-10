# InputHeader

Input component to be used in a header.

## Usage

Its usage is the same as the `TextInput` from `react-native`, but it is styled
to be used inside a header component.

```ts
import { useState } from "react"
import { Appbar } from "react-native-paper"
import { InputHeader } from "react-native-paper-towel"


export function App() {


    const [title, setTitle] = useState("Title")


    return (
        <View style={{ flex: 1 }}>
            <Appbar>
                <Appbar.BackAction {/* ... */} />

                <InputHeader
                    value={title}
                    onChangeText={setTitle}
                />
            </Appbar>

            {/* ... */}
        </View>
    )
}
```

## Docs

Its props are the same as `TextInputProps` from `react-native`.
