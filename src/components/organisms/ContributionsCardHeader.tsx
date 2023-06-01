import Image from 'next/image'
import clsx from 'clsx'
import { CompanyType } from '@/@types/types'
import Arrow from '@/assets/icon/arrow.svg'
import MoneyCircle from '@/assets/icon/MoneyCircle'
import Text from '@/components/atoms/Text'

interface ContributionsCardHeaderProps
  extends React.DetailedHTMLProps<
      React.LiHTMLAttributes<HTMLLIElement>,
      HTMLLIElement
    >,
    CompanyType {
  closed: boolean
}

export default function ContributionsCardHeader({
  closed,
  onClick,
  companyLogo,
  companyName,
  totalValue,
  contributions,
}: ContributionsCardHeaderProps) {
  return (
    <li
      onClick={onClick}
      className={clsx(
        closed ? 'rounded-lg' : 'rounded-t-lg',
        'flex cursor-pointer items-center gap-3 border border-gray-300 px-6 py-3'
      )}
    >
      <Image src={companyLogo} alt="Sulamerica Logo" />
      <div>
        <Text fontStyle="mds" className="text-gray-900">
          {companyName}
        </Text>
        <Text fontStyle="smr" className="text-gray-600">
          Valor Total: R$ {totalValue}
        </Text>
      </div>
      {closed && (
        <div className="ml-auto flex gap-2 text-gray-500">
          <MoneyCircle />
          <Text fontStyle="xsr">{contributions} aportes</Text>
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
