import Image from 'next/image'
import NubankAvatar from '@/assets/logo/nubank.svg'
import Text from '../atoms/Text'

interface CardProps {}

export default function CardProp({}: CardProps) {
  return (
    <div className="max-w-[240px] rounded-lg border bg-white p-4 shadow-xs">
      <Image src={NubankAvatar} alt="Avatar Nubank" />
      <Text fontStyle="mdm" className="mt-2 text-gray-700">
        Nubank SA
      </Text>
      <Text fontStyle="smr" className="mb-4 text-gray-500">
        Saúde Integral III
      </Text>
    </div>
  )
}
