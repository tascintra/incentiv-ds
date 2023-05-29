import clsx from 'clsx'
import Text from '@/components/atoms/Text'

interface MessageBannerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  message: string
}

export default function MessageBanner({
  message,
  className,
}: MessageBannerProps) {
  return (
    <div className={clsx('w-full rounded-lg bg-primary-50 p-4', className)}>
      <Text fontStyle="smr" className="text-gray-700">
        {message}
      </Text>
    </div>
  )
}
