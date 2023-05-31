import React from 'react'

interface BankProps extends React.SVGProps<SVGSVGElement> {}

export default function Bank(props: BankProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      {...props}
    >
      <g stroke="#667085" clipPath="url(#a)">
        <path
          strokeWidth="1.5"
          d="M1.667 7.14c0-.996.402-1.607 1.234-2.07l3.424-1.905C8.119 2.166 9.017 1.667 10 1.667c.984 0 1.88.499 3.675 1.498L17.1 5.07c.831.463 1.233 1.074 1.233 2.07 0 .271 0 .406-.03.517-.154.584-.683.676-1.194.676H2.891c-.51 0-1.04-.092-1.195-.676-.03-.11-.03-.246-.03-.516Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.997 5.833h.007"
        />
        <path
          strokeWidth="1.5"
          d="M3.333 8.333v7.084m3.334-7.084v7.084M13.334 8.333v7.084m3.333-7.084v7.084M15.833 15.417H4.167a2.5 2.5 0 0 0-2.5 2.5c0 .23.186.416.416.416h15.834c.23 0 .416-.186.416-.416a2.5 2.5 0 0 0-2.5-2.5Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
