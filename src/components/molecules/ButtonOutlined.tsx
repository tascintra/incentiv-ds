import React from 'react'
import Text from '@/components/atoms/Text'

interface ButtonOutlinedProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  iconLeft?: React.ReactNode
}

export default function ButtonOutlined({
  children,
  iconLeft,
}: ButtonOutlinedProps) {
  return (
    <button className="flex gap-2 rounded-lg px-4 py-[0.625rem] transition hover:bg-primary-50">
      {iconLeft && iconLeft}
      <Text as="span" fontStyle="sms" className="text-primary-500">
        {children}
      </Text>
    </button>
  )
}
