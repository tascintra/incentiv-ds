import clsx from 'clsx'
import Text from '@/components/atoms/Text'

interface ContributionsCardInfoProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  infoHeader: string
  infoText: string
}

export default function ContributionsCardInfo({
  infoHeader,
  infoText,
}: ContributionsCardInfoProps) {
  return (
    <div>
      <Text fontStyle="smm" className="min-w-max text-gray-900">
        {infoHeader}
      </Text>
      <Text
        fontStyle="smr"
        className={clsx(
          infoText.match('Visualizar')
            ? 'cursor-pointer text-primary-500'
            : 'text-gray-400',
          'min-w-max'
        )}
      >
        {infoText}
      </Text>
    </div>
  )
}
