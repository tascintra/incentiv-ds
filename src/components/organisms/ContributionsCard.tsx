'use client'
import { useState } from 'react'
import clsx from 'clsx'
import ContributionsCardHeader from '@/components/organisms/ContributionsCardHeader'
import ContributionsCardContribution from '@/components/organisms/ContributionsCardContribution'

interface ContributionsCardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  infoHeader: string
  infoText: string
}

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

export default function ContributionsCard() {
  const [closed, setClosed] = useState(true)

  return (
    <ul className={clsx(!closed ? 'h-full' : 'h-[70px]', 'overflow-hidden', 'bg-white')}>
      <ContributionsCardHeader
        onClick={() => setClosed(!closed)}
        closed={closed}
      />
      <div
        className={clsx(
          'grid grid-cols-cardTable gap-x-32 gap-y-6 rounded-b-lg border border-t-0 border-gray-300 p-6'
        )}
      >
        {contributionsInfo.map((info) =>
          info.map(({ infoHeader, infoText }) => (
            <ContributionsCardContribution
              key={infoHeader}
              infoHeader={infoHeader}
              infoText={infoText}
            />
          ))
        )}
      </div>
    </ul>
  )
}
