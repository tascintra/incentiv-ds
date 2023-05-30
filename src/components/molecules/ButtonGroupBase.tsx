import clsx from 'clsx'
import Text from '@/components/atoms/Text'
import { TextStyles } from '@/@types/types'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  label: string
  items?: string
  current?: boolean
  fontSize?:
    | 'xsr'
    | 'xsm'
    | 'smr'
    | 'smm'
    | 'sms'
    | 'smb'
    | 'mdm'
    | 'mds'
    | 'xlb'
  as?: 'p' | 'span'
}

export default function ButtonGroupBase({
  label,
  items,
  current,
  fontSize = 'sms',
  className,
  onClick,
}: ButtonProps) {
  return (
    <li
      className={clsx(
        'w-full min-w-fit cursor-pointer px-4 py-[0.625rem] hover:bg-gray-50',
        current ? 'bg-gray-100' : 'bg-white',
        className
      )}
      onClick={onClick}
    >
      <Text
        fontStyle={fontSize}
        className="flex items-center justify-center gap-[0.125rem]"
      >
        {label} {items && <span className="text-gray-400">({items})</span>}
      </Text>
    </li>
  )
}
