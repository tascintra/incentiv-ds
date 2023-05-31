import Text from '@/components/atoms/Text'

interface GroupTargetTitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  iconLeft: React.ReactNode
}

export default function GroupTargetTitle({
  children,
  iconLeft,
}: GroupTargetTitleProps) {
  return (
    <div className="flex gap-2">
      {iconLeft}
      <Text fontStyle="sms" className="text-gray-700">
        {children}
      </Text>
    </div>
  )
}
