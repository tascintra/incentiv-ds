import React from 'react'

interface LocationProps extends React.SVGProps<SVGSVGElement> {}

export default function Location(props: LocationProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      {...props}
    >
      <path
        stroke="#667085"
        strokeWidth="1.5"
        d="M12.083 7.5a2.083 2.083 0 1 1-4.167 0 2.083 2.083 0 0 1 4.167 0Z"
      />
      <path
        stroke="#667085"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.185 14.167c1.162 1.657 1.718 2.54 1.387 3.25a1.51 1.51 0 0 1-.116.205c-.48.711-1.716.711-4.191.711h-4.53c-2.475 0-3.712 0-4.19-.71a1.51 1.51 0 0 1-.117-.206c-.331-.71.225-1.593 1.387-3.25"
      />
      <path
        stroke="#667085"
        strokeWidth="1.5"
        d="M11.048 14.578a1.51 1.51 0 0 1-2.096 0c-2.574-2.494-6.023-5.28-4.34-9.325C5.52 3.066 7.703 1.667 10 1.667s4.48 1.4 5.389 3.586c1.68 4.04-1.761 6.84-4.341 9.325Z"
      />
    </svg>
  )
}
