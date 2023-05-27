import clsx from 'clsx'
import { CommonTextProps } from '@/@types/types'

interface HeadingProps extends CommonTextProps {
  as: 'h2' | 'h4' | 'span'
  fontStyle: 'xsr' | 'xsb'
}

export default function Heading({
  as,
  fontStyle,
  children,
  className,
  ...props
}: HeadingProps) {
  const Comp = as

  const headingStyle = {
    h2: 'text-4xl font-bold leading-11 tracking-tight',
    h4: 'text-2.5xl font-bold tracking-tight',
    xsr: 'text-2xl font-normal',
    xsb: 'text-2xl font-bold',
  }

  return (
    <Comp className={clsx(headingStyle[fontStyle], className)} {...props}>
      {children}
    </Comp>
  )
}
