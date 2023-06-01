import clsx from 'clsx'
import { StepsItemType } from '@/@types/types'
import CircleIcon from '@/assets/icon/CircleIcon'
import Subtract from '@/assets/icon/Subtract'
import Text from '@/components/atoms/Text'

interface StepsItemProps
  extends React.DetailedHTMLProps<
      React.LiHTMLAttributes<HTMLLIElement>,
      HTMLLIElement
    >,
    StepsItemType {}

interface IIcons {
  done: React.ReactNode
  current: React.ReactNode
  next: React.ReactNode
}

export default function StepsItem({
  progress = 'done',
  processName,
  className,
  ...props
}: StepsItemProps) {
  const iconsType: IIcons = {
    done: <Subtract />,
    current: <CircleIcon className="stroke-neutral-800" />,
    next: <CircleIcon className="stroke-neutral-300" />,
  }

  const Icon = iconsType[progress as keyof IIcons]

  const progressStyle = {
    done: 'text-neutral-400',
    current: 'text-neutral-800',
    next: 'text-neutral-400',
  }

  return (
    <li
      className={clsx(
        'flex items-center gap-4',
        progressStyle[progress],
        className
      )}
      {...props}
    >
      {Icon}
      <Text fontStyle="smm">{processName}</Text>
    </li>
  )
}
