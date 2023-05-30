interface VisionSquareButton extends React.SVGProps<SVGSVGElement> {}

export default function VisionSquareButton({ className }: VisionSquareButton) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      className={className}
    >
      <g strokeWidth="1.5" clipPath="url(#a)">
        <path d="M1.667 15c0-1.284 0-1.926.289-2.397a1.96 1.96 0 0 1 .647-.647c.471-.29 1.113-.29 2.397-.29 1.284 0 1.926 0 2.397.29.264.161.486.383.647.647.29.471.29 1.113.29 2.397 0 1.284 0 1.925-.29 2.397a1.962 1.962 0 0 1-.647.647c-.471.29-1.113.29-2.397.29-1.284 0-1.926 0-2.397-.29a1.961 1.961 0 0 1-.647-.647c-.29-.471-.29-1.113-.29-2.397ZM11.667 15c0-1.284 0-1.926.289-2.397a1.96 1.96 0 0 1 .647-.647c.472-.29 1.113-.29 2.397-.29 1.284 0 1.926 0 2.397.29.264.161.486.383.647.647.29.471.29 1.113.29 2.397 0 1.284 0 1.925-.29 2.397a1.962 1.962 0 0 1-.647.647c-.471.29-1.113.29-2.397.29-1.284 0-1.925 0-2.397-.29a1.962 1.962 0 0 1-.647-.647c-.29-.471-.29-1.113-.29-2.397ZM1.667 5c0-1.284 0-1.926.289-2.397a1.96 1.96 0 0 1 .647-.647c.471-.29 1.113-.29 2.397-.29 1.284 0 1.926 0 2.397.29.264.161.486.383.647.647.29.471.29 1.113.29 2.397 0 1.284 0 1.926-.29 2.397a1.96 1.96 0 0 1-.647.647c-.471.29-1.113.29-2.397.29-1.284 0-1.926 0-2.397-.29a1.96 1.96 0 0 1-.647-.647c-.29-.471-.29-1.113-.29-2.397ZM11.667 5c0-1.284 0-1.926.289-2.397.161-.264.383-.486.647-.647.472-.29 1.113-.29 2.397-.29 1.284 0 1.926 0 2.397.29.264.161.486.383.647.647.29.471.29 1.113.29 2.397 0 1.284 0 1.926-.29 2.397a1.961 1.961 0 0 1-.647.647c-.471.29-1.113.29-2.397.29-1.284 0-1.925 0-2.397-.29a1.961 1.961 0 0 1-.647-.647c-.29-.471-.29-1.113-.29-2.397Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
