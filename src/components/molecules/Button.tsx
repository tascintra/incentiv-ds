import clsx from 'clsx'
import { TextStyles } from '@/@types/types'
import { textStyles } from '@/components/atoms/Text'

interface IButton extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  colorScheme?: 'blue' | 'neutral'
  variant?: 'solid' | 'outline'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

type ButtonProps = IButton & TextStyles

export default function Button({
  className,
  children,
  fontStyle,
  colorScheme = 'blue',
  variant = 'outline',
  leftIcon,
  rightIcon,
}: ButtonProps) {
  const buttonColorSchemes = {
    blue: 'border-primary-500 bg-primary-500 text-primary-500',
    neutral: 'border-neutral-200 text-neutral-800',
  }

  const buttonVariants = {
    solid: 'border-none text-white',
    outline: 'border bg-transparent',
  }

  return (
    <button
      className={clsx(
        textStyles[fontStyle],
        buttonColorSchemes[colorScheme],
        buttonVariants[variant],
        'flex items-center rounded-md',
        leftIcon ? 'gap-[0.375rem] px-4 py-[0.625rem]' : 'px-5 py-3',
        rightIcon && 'gap-2',
        className
      )}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </button>
  )
}
