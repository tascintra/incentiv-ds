import clsx from 'clsx'
import { TextStyles, CommonTextProps } from '@/@types/types'

type TextProps = TextStyles & CommonTextProps

export const textStyles = {
  xsr: 'text-xs font-normal leading-4.5',
  xsm: 'text-xs font-medium leading-4.5',
  smr: 'text-sm font-normal',
  smm: 'text-sm font-medium',
  sms: 'text-sm font-semibold',
  smb: 'text-sm font-bold',
  mdm: 'text-base font-medium',
  mds: 'text-base font-semibold',
  xlb: 'text-xl font-bold leading-7.5',
}

export default function Text({
  fontStyle='smm',
  children,
  className,
  as = 'p',
  ...props
}: TextProps) {
  const Comp = as

  return (
    <Comp className={clsx(textStyles[fontStyle], className)} {...props}>
      {children}
    </Comp>
  )
}
