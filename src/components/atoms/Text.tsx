import clsx from 'clsx'
import { CommonTextProps } from '@/@types/types'

interface Styles extends CommonTextProps {
  fontStyle: 'xsr' | 'xsm' | 'smr' | 'smm' | 'sms' | 'smb' | 'mdm' | 'mds' | 'xlb'
  as?: 'p' | 'span'
}

export default function Text({
  fontStyle,
  children,
  className,
  as = 'p',
  ...props
}: Styles) {
  const Comp = as

  const textStyle = {
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

  return (
    <Comp className={clsx(textStyle[fontStyle], className)} {...props}>
      {children}
    </Comp>
  )
}
