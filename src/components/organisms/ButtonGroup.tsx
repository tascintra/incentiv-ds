'use client'
import { useState } from 'react'
import clsx from 'clsx'
import ButtonGroupBase from '@/components/molecules/ButtonGroupBase'

interface baseItemsProps {
  label: string
  items: number
}

interface GroupProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  baseItems: baseItemsProps[]
}

export default function ButtonGroup({
  className,
  baseItems,
  ...props
}: GroupProps) {
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
