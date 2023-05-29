'use client'
import { useState } from 'react'
import clsx from 'clsx'
import ButtonGroupBase from '@/components/molecules/ButtonGroupBase'

interface GroupProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {}

const baseItems = [
  { label: 'Interesse', items: 5 },
  { label: 'Negociação', items: 1 },
  { label: 'Due Diligence', items: 0 },
  { label: 'Formalização', items: 0 },
  { label: 'Aporte', items: 0 },
]

export default function ButtonGroup({ className, ...props }: GroupProps) {
  const [current, setCurrent] = useState(baseItems[0].label.toString())

  return (
    <ul
      className={clsx(
        'flex items-center justify-center divide-x divide-gray-300 overflow-hidden rounded-lg border border-gray-300 bg-white shadow-xs',
        className
      )}
      {...props}
    >
      {baseItems.map(({ label, items }) => (
        <ButtonGroupBase
          key={label}
          label={label}
          items={items}
          current={current === label}
          onClick={() => setCurrent(label)}
        />
      ))}
    </ul>
  )
}
