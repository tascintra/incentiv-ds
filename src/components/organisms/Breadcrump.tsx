import Image from 'next/image'
import HomeIcon from '@/assets/icon/home.svg'
import Text from '@/components/atoms/Text'

export default function Breadcrump() {
  return (
    <div className='flex items-center'>
      <Image src={HomeIcon} width={16} height={16} alt="Ícone da Home" />
      <Text as="span" fontStyle="smm" className="text-neutral-400 px-2">
        /
      </Text>
      <Text as="span" fontStyle="smr" className="text-neutral-400">
        Meus projetos
      </Text>
      <Text as="span" fontStyle="smm" className="text-neutral-400 px-2">
        /
      </Text>
      <Text as="span" fontStyle="smr" className="text-primary-600">
        Projeto Saúde Integral III
      </Text>
    </div>
  )
}
