import Text from '@/components/atoms/Text'
import Heart from '@/assets/icon/Heart'
import clsx from 'clsx'

interface TagProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  icon?: 'heart'
  text: string
}

const tagIcons = {
  heart: <Heart />,
}

export default function Tag({ className, icon, text }: TagProps) {
  return (
    <div
      className={clsx(
        'flex max-w-fit items-center gap-2 rounded-2xl bg-gray-100 px-2 py-[2px]',
        className
      )}
    >
      {icon && tagIcons[icon]}
      <Text fontStyle="xsr" className="text-gray-500">
        {text}
      </Text>
    </div>
  )
}
