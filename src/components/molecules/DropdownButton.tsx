import clsx from 'clsx'
import { TextStyles } from '@/@types/types'
import { textStyles } from '@/components/atoms/Text'

interface DropdownButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    TextStyles {
  iconRight?: React.ReactNode
}

export default function DropdownButton({
  children,
  iconRight,
  className,
  fontStyle = 'smm',
  ...props
}: DropdownButtonProps) {
  return (
    <button
      className={clsx(
        'flex items-center gap-[0.375rem] px-1 py-[0.625rem] text-primary-500',
        textStyles[fontStyle],
        className
      )}
      {...props}
    >
      {children}
      {iconRight}
    </button>
  )
}
