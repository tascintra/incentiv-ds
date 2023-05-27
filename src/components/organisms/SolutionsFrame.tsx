import Image from 'next/image'
import PigBank from '@/assets/icon/pig-bank.svg'
import BreadConnected from '@/assets/icon/breadcrumb-connected.svg'
import BreadEnd from '@/assets/icon/breadcrumb-end.svg'
import Text from '@/components/atoms/Text'

export default function SolutionsFrame() {
  return (
    <div>
      <Text fontStyle='xsm' className="py-2 text-gray-400">
        SOLUÇÕES
      </Text>
      <menu>
        <li className="flex cursor-pointer gap-3 p-2">
          <Image src={PigBank} alt="Ícone do banco" />
          <Text fontStyle='smm' className="text-primary-500">
            Captar recursos
          </Text>
        </li>
        <li className="flex cursor-pointer items-center pl-4 ">
          <Image src={BreadConnected} alt="Conexão do menu" />
          <Text fontStyle='smm' className="text-primary-500 hover:text-primary-500">
            Processos seletivos
          </Text>
        </li>
        <li className="flex cursor-pointer items-center pl-4">
          <Image src={BreadEnd} alt="Fim do menu" />
          <Text fontStyle='smm' className="mt-1 text-gray-500 hover:text-primary-500">
            Meus patrocinadores
          </Text>
        </li>
      </menu>
    </div>
  )
}
