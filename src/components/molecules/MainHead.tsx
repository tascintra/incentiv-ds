import Heading from '@/components/atoms/Heading'
import Text from '@/components/atoms/Text'

export default function MainHead() {
  return (
    <>
      <div className="flex gap-2">
        <Text fontStyle="smr" className="text-gray-400">
          Captar recursos
        </Text>
        <Text fontStyle="smr" className="text-gray-400">
          /
        </Text>
      </div>
      <Heading as="span" fontStyle="xsr" className="text-gray-700">
        Processos seletivos
      </Heading>
    </>
  )
}
