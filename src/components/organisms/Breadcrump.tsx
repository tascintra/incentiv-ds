import Image from 'next/image'
import HomeIcon from '@/assets/icon/home.svg'
import Text from '@/components/atoms/Text'

export default function Breadcrump() {
  return (
    <div className="flex items-center">
      <Image
        src={HomeIcon}
        width={16}
        height={16}
        alt="Ícone da Home"
        className="cursor-pointer"
      />
      <Text as="span" fontStyle="smm" className="px-2 text-neutral-400">
        /
      </Text>
      <Text
        as="span"
        fontStyle="smr"
        className="cursor-pointer text-neutral-400 hover:underline"
      >
        Meus projetos
      </Text>
      <Text as="span" fontStyle="smm" className="px-2 text-neutral-400">
        /
      </Text>
      <Text
        as="span"
        fontStyle="smr"
        className="cursor-pointer text-primary-600 hover:underline"
      >
        Projeto Saúde Integral III
      </Text>
    </div>
  )
}
