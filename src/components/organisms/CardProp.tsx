import Image from 'next/image'
import clsx from 'clsx'
import Text from '@/components/atoms/Text'
import Tag from '@/components/organisms/Tag'

interface CardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  companyAvatar: HTMLImageElement
  companyName: string
  projectName: string
  tagsInfo: {
    time: string
    rating: string
    icon: 'heart'
  }
}

export default function CardProp({
  className,
  companyAvatar,
  companyName,
  projectName,
  tagsInfo,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        'max-w-[240px] cursor-pointer rounded-lg border bg-white p-4 shadow-xs',
        className
      )}
      {...props}
    >
      <Image src={companyAvatar} alt="Avatar Nubank" />
      <Text fontStyle="mdm" className="mt-2 text-gray-700">
        {companyName}
      </Text>
      <Text fontStyle="smr" className="mb-4 text-gray-500">
        {projectName}
      </Text>
      <div className="flex w-full gap-2">
        <Tag text={tagsInfo.time} />
        <Tag text={tagsInfo.rating} icon={tagsInfo.icon} />
      </div>
    </div>
  )
}
