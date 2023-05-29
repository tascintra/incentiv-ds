import { ReactNode } from 'react'
import clsx from 'clsx'

interface IconButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: ReactNode
  selected?: boolean
}

export default function IconButton({
  icon,
  onClick,
  selected,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(selected ? 'stroke-gray-600' : 'stroke-gray-300')}
    >
      {icon}
    </button>
  )
}
