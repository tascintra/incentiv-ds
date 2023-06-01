interface EducationPencilProps extends React.SVGProps<SVGSVGElement> {}

export default function EducationPencil(props: EducationPencilProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      {...props}
    >
      <path
        stroke="#737373"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m24.714 24.714-9.428-9.428m0 9.428 9.428-9.428M20 36.666c9.205 0 16.667-7.461 16.667-16.666S29.205 3.333 20 3.333C10.795 3.333 3.333 10.795 3.333 20c0 9.205 7.462 16.667 16.667 16.667Z"
      />
    </svg>
  )
}
