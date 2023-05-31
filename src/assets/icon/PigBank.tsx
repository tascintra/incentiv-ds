interface PigBankProps extends React.SVGProps<SVGSVGElement> {}

export default function PigBank(props: PigBankProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      {...props}
    >
      <path
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.833 4.167c4.142 0 7.5 2.798 7.5 6.25 0 1.715-.83 3.27-2.172 4.399a.892.892 0 0 0-.328.677V17.5h-1.666l-.662-.944a.43.43 0 0 0-.46-.166c-1.441.371-2.982.371-4.423 0a.43.43 0 0 0-.46.166L7.5 17.5H5.833v-1.987a.833.833 0 0 0-.36-.686c-.896-.618-3.806-1.826-3.806-3.112v-1.298c0-.493.373-.893.833-.893.506 0 .918-.197 1.085-.719.853-2.67 3.775-4.638 7.248-4.638Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12.083 6.667a3.62 3.62 0 0 0-1.666-.417c-.58 0-1.14.146-1.667.417"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6.25 9.167h.007"
      />
      <path
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M17.5 7.083c.417-.416.833-1.197.833-2.224 0-1.303-1.119-2.359-2.5-2.359a2.63 2.63 0 0 0-.833.134"
      />
    </svg>
  )
}
