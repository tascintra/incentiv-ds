import clsx from 'clsx'
import Heart from '@/assets/icon/Heart'
import { TextStyles } from '@/@types/types'
import Text from '@/components/atoms/Text'

interface ITag
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  icon?: 'heart'
  text: string
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
}: TagProps) {
  return (
    <div
      className={clsx(
        'flex max-w-fit items-center gap-2 rounded-2xl bg-gray-100 px-2 py-[2px]',
        className
      )}
    >
      {icon && tagIcons[icon]}
      <Text fontStyle={fontStyle} className="text-gray-500">
        {text}
      </Text>
    </div>
  )
}
