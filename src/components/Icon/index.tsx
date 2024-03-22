import { IconProps as VectorIconProps } from "react-native-vector-icons/Icon"
import MaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons"
import Material from "react-native-vector-icons/MaterialIcons"


export type IconGroup = "material" | "material-community"


type MaterialIconsVariants = {
  outlined?: boolean
  round?: boolean
  sharp?: boolean
}

export type IconProps<G extends IconGroup> = VectorIconProps
  & (G extends "material" ? MaterialIconsVariants : object)
  & {
    group?: G
  }


export type OptionalIconProps<G extends IconGroup> = Partial<IconProps<G>>


function getComponent(group: IconGroup) {
  switch (group) {
    case "material":
      return Material
    case "material-community":
      return MaterialCommunity
    default:
      console.warn(`Invalid icon group: "${group}". Using "material-community" as default.`)
      return MaterialCommunity
  }
}


export function Icon<G extends IconGroup>(props: IconProps<G>) {


  const group = props.group ?? "material-community"
  const BaseComponent = getComponent(group)


  return (
    <BaseComponent
      {...props}
      size={props.size ?? 24}
    />
  )
}
