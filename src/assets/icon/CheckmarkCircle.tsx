interface CheckmarkCircleProps extends React.SVGProps<SVGSVGElement> {}

export default function CheckmarkCircle({ className }: CheckmarkCircleProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      className={className}
    >
      <path
        fill="#1B74E4"
        fill-rule="evenodd"
        d="M1.042 10a8.958 8.958 0 1 0 17.916 0 8.958 8.958 0 0 0-17.916 0Zm12.854-3.114c.34.31.363.838.052 1.177l-4.584 5a.833.833 0 0 1-1.203.026l-2.084-2.083a.833.833 0 1 1 1.179-1.179l1.468 1.468 3.995-4.358a.833.833 0 0 1 1.178-.051Z"
        clip-rule="evenodd"
      />
    </svg>
  )
}
