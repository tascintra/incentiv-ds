import clsx from 'clsx'
import { TextStylesInterface } from '@/@types/types'

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
  fontStyle,
  children,
  className,
  as = 'p',
  ...props
}: TextStylesInterface) {
  const Comp = as

  return (
    <Comp className={clsx(textStyles[fontStyle], className)} {...props}>
      {children}
    </Comp>
  )
}
