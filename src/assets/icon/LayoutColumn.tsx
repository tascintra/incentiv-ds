interface LayoutColumnProps extends React.SVGProps<SVGSVGElement> {}

export default function LayoutColumn({ className }: LayoutColumnProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16.757 3.243c1.16 1.16 1.16 3.025 1.16 6.757 0 3.732 0 5.598-1.16 6.757-1.16 1.16-3.025 1.16-6.757 1.16-3.732 0-5.598 0-6.757-1.16-1.16-1.159-1.16-3.025-1.16-6.757 0-3.732 0-5.598 1.16-6.757 1.16-1.16 3.025-1.16 6.757-1.16 3.732 0 5.598 0 6.757 1.16Z"
      />
      <path strokeWidth="1.5" d="M7.083 2.083v15.834M12.917 2.083v15.834" />
    </svg>
  )
}
