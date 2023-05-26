import { ReactNode } from 'react'
import clsx from 'clsx'
import { RequireAtLeastOne } from '@/@types/types'

interface Styles {
  xsr: boolean
  xsm: boolean
  smm: boolean
  smb: boolean
  mds: boolean
  xlb: boolean
}

interface TextProps {
  children: ReactNode
  className?: string
}

type Props = TextProps & RequireAtLeastOne<Styles>

export default function Text({
  xsr,
  xsm,
  smm,
  smb,
  mds,
  xlb,
  children,
  className,
  ...props
}: Props) {
  const textStyle =
    (xsr && 'text-xs font-normal leading-4.5') ||
    (xsm && 'text-xs font-medium leading-4.5') ||
    (smm && 'text-sm font-medium') ||
    (smb && 'text-sm font-bold') ||
    (mds && 'text-base font-semibold') ||
    (xlb && 'text-xl font-bold leading-7.5')

  return (
    <p className={clsx(textStyle, className)} {...props}>
      {children}
    </p>
  )
}
