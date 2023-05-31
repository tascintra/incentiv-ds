import Image from 'next/image'
import clsx from 'clsx'
import HospitalLogo from '@/assets/logo/hos-peq-princ.svg'
import IconLeft from '@/assets/icon/IconLeft'
import Text from '@/components/atoms/Text'

interface Frame
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export default function IdentityFrame({ className, ...props }: Frame) {
  return (
    <div
      className={clsx(
        'flex w-full cursor-pointer items-center justify-between gap-2 rounded-2xl bg-gray-100 py-3 pl-2 pr-3',
        className
      )}
      {...props}
    >
      <Image src={HospitalLogo} alt="Associação Hospitalar Pequeno Príncipe" />
      <div>
        <Text fontStyle="smm" className="text-gray-500">
          Olá! 👋
        </Text>
        <Text fontStyle="smm" className="text-gray-900">
          Associação Hospitalar...
        </Text>
      </div>
      <IconLeft />
    </div>
  )
}
