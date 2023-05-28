import React from 'react'
import ButtonGroupBase from '../molecules/ButtonGroupBase'
import clsx from 'clsx'

interface GroupProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {}

const baseItems = [
  { label: 'Interesse', items: 5, current: true },
  { label: 'Negociação', items: 1, current: false },
  { label: 'Due Diligence', items: 0, current: false },
  { label: 'Formalização', items: 0, current: false },
  { label: 'Aporte', items: 0, current: false },
]

export default function ButtonGroup({ className, ...props }: GroupProps) {
  return (
    <ul
      className={clsx(
        'flex items-center justify-center divide-x divide-gray-300 overflow-hidden rounded-lg border border-gray-300 bg-white shadow-xs',
        className
      )}
      {...props}
    >
      {baseItems.map(({ label, items, current }) => (
        <ButtonGroupBase
          key={label}
          label={label}
          items={items}
          current={current}
        />
      ))}
    </ul>
  )
}
