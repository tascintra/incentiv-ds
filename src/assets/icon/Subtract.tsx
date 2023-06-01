interface SubtractProps extends React.SVGProps<SVGSVGElement> {}

export default function Subtract(props: SubtractProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      {...props}
    >
      <path
        fill="#039855"
        fillRule="evenodd"
        d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm4.592-12.54a.75.75 0 0 0-1.184-.92L9.401 11.69a.25.25 0 0 1-.365.033L6.502 9.443a.75.75 0 0 0-1.004 1.114l2.535 2.282a1.75 1.75 0 0 0 2.552-.227l4.007-5.152Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
