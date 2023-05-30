import clsx from 'clsx'
import CheckmarkCircle from '@/assets/icon/CheckmarkCircle'
import Text from '@/components/atoms/Text'

interface StatusCardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export default function ProjectStatusCard({ className }: StatusCardProps) {
  return (
    <div
      className={clsx(
        'flex w-full items-center gap-3 rounded-lg border border-neutral-200 px-4 py-2',
        className
      )}
    >
      <CheckmarkCircle />
      <div>
        <Text fontStyle="smm" className="w-full text-gray-800">
          Status do projeto
        </Text>
        <Text fontStyle="smr" className="text-gray-500">
          Incentivado
        </Text>
      </div>
    </div>
  )
}
