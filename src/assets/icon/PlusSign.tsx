interface PlusSignProps extends React.SVGProps<SVGSVGElement> {}

export default function PlusSign(props: PlusSignProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      {...props}
    >
      <path
        stroke="#1B74E4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10 3.333v13.334M16.667 10H3.333"
      />
    </svg>
  )
}
