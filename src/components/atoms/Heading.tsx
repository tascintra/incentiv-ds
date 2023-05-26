import { ReactNode } from 'react'
import { RequireAtLeastOne } from '@/@types/types'
import clsx from 'clsx'

interface Styles {
  h2: boolean
  h4: boolean
  xsr: boolean
  xsb: boolean
}

interface HeadingProps {
  children: ReactNode
  className?: string
}

type Props = HeadingProps & RequireAtLeastOne<Styles>

export default function Heading({
  h2,
  h4,
  xsr,
  xsb,
  children,
  className,
  ...props
}: Props) {
  const Comp = (h2 && 'h2') || (h4 && 'h4') || 'span'

  const headingStyle =
    (h2 && 'text-4xl font-bold leading-11 tracking-tight') ||
    (h4 && 'text-2.5xl font-bold tracking-tight') ||
    (xsr && 'text-2xl font-normal') ||
    (xsb && 'text-2xl font-bold')

  return (
    <Comp className={clsx(headingStyle, className)} {...props}>
      {children}
    </Comp>
  )
}
