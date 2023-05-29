import clsx from 'clsx'
import Text from '@/components/atoms/Text'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  label: string
  items: number
  current?: boolean
}

export default function ButtonGroupBase({
  label,
  items,
  current,
  onClick,
}: ButtonProps) {
  return (
    <li
      className={clsx(
        'cursor-pointer px-4 py-[0.625rem] hover:bg-gray-50',
        current ? 'bg-gray-50' : 'bg-white'
      )}
      onClick={onClick}
    >
      <Text fontStyle="sms">
        {label} <span className="text-gray-400">({items})</span>
      </Text>
    </li>
  )
}
