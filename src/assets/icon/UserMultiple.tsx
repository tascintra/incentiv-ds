import React from 'react'

interface UserMultiple extends React.SVGProps<SVGSVGElement> {}

export default function UserMultiple(props: UserMultiple) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      {...props}
    >
      <path
        stroke="#667085"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.42 15.833h.368c.863 0 1.549-.393 2.164-.942 1.565-1.396-2.113-2.808-3.369-2.808"
      />
      <path
        stroke="#667085"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12.5 4.224c.19-.038.386-.057.587-.057 1.517 0 2.746 1.119 2.746 2.5 0 1.38-1.23 2.5-2.746 2.5-.201 0-.398-.02-.587-.058"
      />
      <path
        stroke="#667085"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3.986 12.593c-.917.526-3.322 1.601-1.857 2.947.715.657 1.512 1.127 2.513 1.127h5.716c1.002 0 1.798-.47 2.513-1.128 1.465-1.345-.94-2.42-1.856-2.946a7.133 7.133 0 0 0-7.03 0Z"
      />
      <path
        stroke="#667085"
        strokeWidth="1.5"
        d="M10.833 5.833a3.333 3.333 0 1 1-6.666 0 3.333 3.333 0 0 1 6.666 0Z"
      />
    </svg>
  )
}
