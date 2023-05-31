interface TargetProps extends React.SVGProps<SVGSVGElement> {}

export default function Target(props: TargetProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
      <g
        stroke="#667085"
        strokeLinecap="round"
        strokeWidth="1.5"
        clipPath="url(#a)"
      >
        <path d="M14.167 10A4.167 4.167 0 1 1 10 5.833" />
        <path d="M11.667 1.833a8.333 8.333 0 1 0 6.5 6.5" />
        <path
          strokeLinejoin="round"
          d="M13.836 6.164 10 10m3.836-3.836-.27-1.038c-.206-.786.075-1.693.724-2.343l.958-.958c.255-.255.65-.192.73.117l.431 1.649 1.65.43c.308.08.371.476.116.73l-.958.958c-.65.65-1.557.931-2.343.726l-1.038-.271Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
