import clsx from 'clsx'
import { CommonTextProps } from '@/@types/types'

interface Styles extends CommonTextProps {
  fontStyle: 'xsr' | 'xsm' | 'smr' | 'smm' | 'sms' | 'smb' | 'mds' | 'xlb'
}

export default function Text({
  fontStyle,
  children,
  className,
  ...props
}: Styles) {
  const textStyle = {
    xsr: 'text-xs font-normal leading-4.5',
    xsm: 'text-xs font-medium leading-4.5',
    smr: 'text-sm font-normal',
    smm: 'text-sm font-medium',
    sms: 'text-sm font-semibold',
    smb: 'text-sm font-bold',
    mds: 'text-base font-semibold',
    xlb: 'text-xl font-bold leading-7.5',
  }

  return (
    <p className={clsx(textStyle[fontStyle], className)} {...props}>
      {children}
    </p>
  )
}
