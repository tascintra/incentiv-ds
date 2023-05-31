interface ButtonDropdownProps extends React.SVGProps<SVGSVGElement> {}

export default function ButtonDropdown(props: ButtonDropdownProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="6"
      fill="none"
      {...props}
    >
      <path
        fill="#1B74E4"
        fillRule="evenodd"
        d="M.345.943a.625.625 0 0 1 .879-.098L5 3.866 8.776.846a.625.625 0 0 1 .781.975L5.39 5.155a.625.625 0 0 1-.78 0L.443 1.82A.625.625 0 0 1 .345.943Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
