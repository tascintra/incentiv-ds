import clsx from 'clsx'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  progress?: string
}

export default function CircleIcon({
  className = 'stroke-neutral-800',
  progress,
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      className={className}
      {...props}
    >
      <circle cx="10" cy="10" r="9" strokeWidth="2" />
    </svg>
  )
}
