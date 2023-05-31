import Image from 'next/image'
import clsx from 'clsx'
import SulamericaLogo from '@/assets/logo/sulamerica.svg'
import Arrow from '@/assets/icon/arrow.svg'
import MoneyCircle from '@/assets/icon/MoneyCircle'
import Text from '@/components/atoms/Text'

interface ContributionsCardHeaderProps
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  closed: boolean
}

export default function ContributionsCardHeader({
  closed,
  onClick,
}: ContributionsCardHeaderProps) {
  return (
    <li
      onClick={onClick}
      className={clsx(
        closed ? 'rounded-lg' : 'rounded-t-lg',
        'flex cursor-pointer items-center gap-3 border border-gray-300 px-6 py-3'
      )}
    >
      <Image src={SulamericaLogo} alt="Sulamerica Logo" />
      <div>
        <Text fontStyle="mds" className="text-gray-900">
          Sulamerica
        </Text>
        <Text fontStyle="smr" className="text-gray-600">
          Valor Total: R$ 700.000,00
        </Text>
      </div>
      {closed && (
        <div className="ml-auto flex gap-2 text-gray-500">
          <MoneyCircle />
          <Text fontStyle="xsr">2 aportes</Text>
        </div>
      )}
      <Image
        src={Arrow}
        alt="Arrow"
        className={clsx(closed ? 'ml-1 rotate-180' : 'ml-auto')}
      />
    </li>
  )
}
