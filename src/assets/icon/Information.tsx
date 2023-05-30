import React from 'react'

interface InformationProps extends React.SVGProps<SVGSVGElement> {}

export default function Information(props: InformationProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      fill="none"
      {...props}
    >
      <path
        stroke="#A3A3A3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7.333 6.167H8v4.666M14.667 7.5a6.667 6.667 0 1 1-13.334 0 6.667 6.667 0 0 1 13.334 0Z"
      />
    </svg>
  )
}
