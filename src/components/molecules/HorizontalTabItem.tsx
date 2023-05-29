import clsx from 'clsx'
import Text from '@/components/atoms/Text'

interface TabItemProps
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  label: string
  active?: boolean
}

export default function HorizontalTabItem({
  label,
  active,
  onClick,
}: TabItemProps) {
  return (
    <li
      className={clsx(
        'cursor-pointer border-primary-500 px-4 pb-5 pt-1 text-gray-500 hover:border-b-2 hover:text-primary-500',
        active && 'border-b-2 text-primary-500'
      )}
      onClick={onClick}
    >
      <Text fontStyle="smm">{label}</Text>
    </li>
  )
}
