interface ArrowRightProps extends React.SVGProps<SVGSVGElement> {}

export default function ArrowRight({}: ArrowRightProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11.667 6.667 15 10m0 0-3.333 3.333M15 10H5"
      />
    </svg>
  )
}
