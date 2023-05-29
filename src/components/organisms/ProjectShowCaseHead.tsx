import Image from 'next/image'
import VitrineProjeto from '@/assets/img/Vitrine-Projeto-Avatar.png'
import Pencil from '@/assets/icon/Pencil'
import Heading from '@/components/atoms/Heading'
import Text from '@/components/atoms/Text'
import Button from '@/components/molecules/Button'

export default function ProjectShowCaseHead() {
  return (
    <div className="flex items-center gap-6">
      <Image src={VitrineProjeto} alt="Avatar do Projeto" />
      <div className="w-full max-w-sm py-5">
        <Heading as="h2" fontStyle="xsb">
          Projeto Saúde Integral III
        </Heading>
        <div className="flex items-center gap-1">
          <Text fontStyle="smm" className="text-neutral-400">
            por
          </Text>
          <Text fontStyle="smr" className="text-primary-500">
            Associação Hospitalar de prot...
          </Text>
        </div>
        <Text
          as="span"
          fontStyle="xsm"
          className="mt-[10px] inline-block rounded-2xl border-2 border-info-success-500 px-2 py-[2px] text-info-success-600"
        >
          3ª edição
        </Text>
      </div>
      <Button
        fontStyle="smm"
        colorScheme="neutral"
        leftIcon={<Pencil />}
        className="self-start"
      >
        Editar
      </Button>
    </div>
  )
}
