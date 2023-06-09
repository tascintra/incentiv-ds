'use client'
import { useState } from 'react'
import clsx from 'clsx'
import { CompanyType } from '@/@types/types'
import ContributionsCardHeader from '@/components/organisms/ContributionsCardHeader'
import ContributionsCardContribution from '@/components/organisms/ContributionsCardContribution'

const contributionsInfo = [
  [
    { infoHeader: 'Razão Social', infoText: 'Sulodonto LTDA' },
    { infoHeader: 'Data do aporte', infoText: '14 de jan, 2023' },
    { infoHeader: 'Valor do aporte', infoText: 'R$ 350.000,00' },
    { infoHeader: 'CNPJ', infoText: '67.863.785/5536-5' },
    { infoHeader: 'Comprovante', infoText: 'Visualizar' },
    { infoHeader: 'Visão geral', infoText: 'Visualizar' },
  ],
  [
    { infoHeader: 'Razão Social', infoText: 'Bola de Neve America' },
    { infoHeader: 'Data do aporte', infoText: '14 de jan, 2023' },
    { infoHeader: 'Valor do aporte', infoText: 'R$ 350.000,00' },
    { infoHeader: 'CNPJ', infoText: '43.567.425/87235-5' },
    { infoHeader: 'Comprovante', infoText: 'Visualizar' },
    { infoHeader: 'Visão geral', infoText: 'Visualizar' },
  ],
]

export default function ContributionsCard({
  companyLogo,
  companyName,
  contributions,
  totalValue,
}: CompanyType) {
  const [closed, setClosed] = useState(true)

  return (
    <ul
      className={clsx(
        !closed ? 'h-full' : 'h-[70px]',
        'overflow-hidden',
        'bg-white'
      )}
    >
      <ContributionsCardHeader
        onClick={() => setClosed(!closed)}
        closed={closed}
        companyLogo={companyLogo}
        companyName={companyName}
        contributions={contributions}
        totalValue={totalValue}
      />
      <div
        className={clsx(
          'flex flex-col gap-6 divide-y rounded-b-lg border border-t-0 border-gray-300 p-6'
        )}
      >
        {contributionsInfo.map((_, index) => (
          <div
            key={Math.random()}
            className={clsx(
              index === 1 && 'pt-6',
              'grid grid-cols-cardTable gap-x-32 gap-y-6'
            )}
          >
            {contributionsInfo[index].map(({ infoHeader, infoText }) => (
              <ContributionsCardContribution
                key={Math.random()}
                infoHeader={infoHeader}
                infoText={infoText}
              />
            ))}
          </div>
        ))}
      </div>
    </ul>
  )
}
