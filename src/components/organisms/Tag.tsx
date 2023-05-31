import clsx from 'clsx'
import { TextStyles } from '@/@types/types'
import Heart from '@/assets/icon/Heart'
import Text from '@/components/atoms/Text'

interface ITag
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  icon?: 'heart'
  text: string
  fill?: 'outline' | 'default'
}

type TagProps = ITag & TextStyles

const tagIcons = {
  heart: <Heart />,
}

export default function Tag({
  className,
  icon,
  text,
  fontStyle = 'xsr',
  fill = 'default',
}: TagProps) {
  const fillStyles = {
    outline: 'border-2 border-primary-500 text-primary-500',
    default: 'bg-gray-100 text-gray-500 py-[2px]',
  }

  return (
    <div
      className={clsx(
        'flex max-w-fit items-center gap-2 rounded-2xl px-2',
        fillStyles[fill],
        className
      )}
    >
      {icon && tagIcons[icon]}
      <Text fontStyle={fontStyle}>{text}</Text>
    </div>
  )
}
