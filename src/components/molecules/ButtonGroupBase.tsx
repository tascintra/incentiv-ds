import clsx from 'clsx'
import Text from '@/components/atoms/Text'

interface ButtonProps {
  label: string
  items: number
  current: boolean
}

export default function ButtonGroupBase({
  label,
  items,
  current,
}: ButtonProps) {
  return (
    <li
      className={clsx(
        'cursor-pointer px-4 py-[0.625rem] hover:bg-gray-50',
        current ? 'bg-gray-50' : 'bg-white'
      )}
    >
      <Text fontStyle="sms">
        {label} <span className="text-gray-400">({items})</span>
      </Text>
    </li>
  )
}
