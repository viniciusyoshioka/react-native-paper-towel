import { useMaterialTheme } from 'react-material-design-provider'

import type { IconNames, IconProps } from '../Icon/index.tsx'
import { Icon } from '../Icon/index.tsx'


export type EmptyScreenIconProps<N extends IconNames = IconNames> = IconProps<N>


export function EmptyScreenIcon<N extends IconNames = IconNames>(
  props: EmptyScreenIconProps<N>,
): React.JSX.Element {


  const { colors } = useMaterialTheme()


  return (
    <Icon
      color={colors.onBackground}
      {...props}
    />
  )
}
