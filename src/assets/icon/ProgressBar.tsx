interface ProgressBarProps extends React.SVGProps<SVGSVGElement> {}

export default function ProgressBar({ className }: ProgressBarProps) {
  return (
    <svg
      width="260"
      height="4"
      viewBox="0 0 260 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_35_11949)">
        <rect width="260" height="4" rx="2" fill="#E5E5E5" />
        <rect width="86.6667" height="4" fill="#1B74E4" />
        <rect x="86.6667" width="86.6667" height="4" fill="#1B74E4" />
      </g>
      <defs>
        <clipPath id="clip0_35_11949">
          <rect width="260" height="4" rx="2" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
