import Image from 'next/image'
import ButtonArrow from '@/assets/icon/btn-arrow.svg'
import Text from '@/components/atoms/Text'

interface OutlinedButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  arrow?: boolean
}

export default function OutlinedButton({
  onClick,
  children,
  arrow,
}: OutlinedButtonProps) {
  return (
    <button onClick={onClick} className="flex items-center gap-2">
      <Text as="span" fontStyle="sms" className="text-gray-600">
        {children}
      </Text>
      {arrow && (
        <Image
          src={ButtonArrow}
          width={20}
          height={20}
          alt="Seta do botão"
          className="px-1"
        />
      )}
    </button>
  )
}
