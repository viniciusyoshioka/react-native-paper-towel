import { useMaterialTheme } from "react-material-design-provider"

import { Icon, IconGroup, IconProps } from "../Icon"


export type EmptyScreenIconProps<G extends IconGroup> = IconProps<G>


export function EmptyScreenIcon<G extends IconGroup>(props: EmptyScreenIconProps<G>) {


    const { group, ...rest } = props
    const { colors } = useMaterialTheme()


    return (
        <Icon
            color={colors.onBackground}
            {...rest}
            group={group}
        />
    )
}
