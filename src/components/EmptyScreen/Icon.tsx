import { useMaterialTheme } from "react-material-design-provider"

import { Icon, IconNames, IconProps } from "../Icon"


export type EmptyScreenIconProps<N extends IconNames = IconNames> = IconProps<N>


export function EmptyScreenIcon<
  N extends IconNames = IconNames,
>(props: EmptyScreenIconProps<N>) {


  const { colors } = useMaterialTheme()


  return (
    <Icon
      color={colors.onBackground}
      {...props}
    />
  )
}
