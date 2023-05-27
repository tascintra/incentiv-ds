import React from 'react'
import Text from '@/components/atoms/Text'
import Image from 'next/image'

interface ItemProps {
  icon: HTMLImageElement
  text: string
}

export default function SidebarMenuItem({ icon, text }: ItemProps) {
  return (
    <li>
      <a
        href="#"
        className="flex gap-3 p-2 text-gray-500 hover:text-primary-500"
      >
        <Image src={icon} alt={`${text} ícone`} />
        <Text fontStyle='smm'>{text}</Text>
      </a>
    </li>
  )
}
