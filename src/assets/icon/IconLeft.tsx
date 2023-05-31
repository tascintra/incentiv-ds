interface IconLeftProps extends React.SVGProps<SVGSVGElement> {}

export default function IconLeft(props: IconLeftProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      {...props}
    >
      <path
        stroke="#98A2B3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5.833 8.333 10 11.667l4.167-3.334"
      />
    </svg>
  )
}
