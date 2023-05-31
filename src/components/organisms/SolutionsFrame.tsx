'use client'
import { useState } from 'react'
import clsx from 'clsx'
import BreadConnected from '@/assets/icon/breadcrumb-connected.svg'
import BreadEnd from '@/assets/icon/breadcrumb-end.svg'
import PigBank from '@/assets/icon/PigBank'
import Text from '@/components/atoms/Text'
import SolutionsFrameOption from '@/components/molecules/SolutionsFrameOption'

const menuOptions = [
  { option: 'Processos seletivos', icon: BreadConnected },
  { option: 'Meus patrocinadores', icon: BreadEnd },
]

export default function SolutionsFrame() {
  const [closed, setClosed] = useState(false)
  const [active, setActive] = useState(menuOptions[0].option.toString())

  return (
    <div>
      <Text fontStyle="xsm" className="py-2 text-gray-400">
        SOLUÇÕES
      </Text>
      <menu className={clsx(closed ? 'h-9' : 'h-full', 'overflow-hidden')}>
        <li
          onClick={() => setClosed(!closed)}
          className={clsx(
            'flex cursor-pointer gap-3 p-2',
            closed
              ? 'stroke-gray-400 text-gray-500'
              : 'stroke-primary-500 text-primary-500'
          )}
        >
          <PigBank />
          <Text fontStyle="smm">Captar recursos</Text>
        </li>

        {menuOptions.map(({ option, icon }) => (
          <SolutionsFrameOption
            key={option}
            option={option}
            icon={icon}
            active={active === option}
            onClick={() => setActive(option)}
          />
        ))}
      </menu>
    </div>
  )
}
