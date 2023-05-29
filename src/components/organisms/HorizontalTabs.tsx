'use client'
import { useState } from 'react'
import clsx from 'clsx'
import HorizontalTabItem from '@/components/molecules/HorizontalTabItem'

interface TabsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {}

const tabOptions = ['Visão geral', 'Objetivos', 'Documentação', 'Captações']

export default function HorizontalTabs({ className }: TabsProps) {
  const [active, setActive] = useState(tabOptions[3])

  return (
    <ul className={clsx('flex', className)}>
      {tabOptions.map((option) => (
        <HorizontalTabItem
          key={option}
          label={option}
          active={active === option}
          onClick={() => setActive(option)}
        />
      ))}
    </ul>
  )
}
