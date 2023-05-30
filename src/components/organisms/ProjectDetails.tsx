import clsx from 'clsx'
import Text from '@/components/atoms/Text'

interface ProjectDetailsProps
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  helperText: string
  infoText: string
  iconLeft: React.ReactNode
  iconRight: React.ReactNode
}

export default function ProjectDetails({
  helperText,
  infoText,
  iconLeft,
  iconRight,
  ...props
}: ProjectDetailsProps) {
  return (
    <li className="flex gap-1" {...props}>
      {iconLeft && iconLeft}
      <Text fontStyle="xsr" className="text-gray-500">
        {helperText}
      </Text>
      <Text
        fontStyle="xsm"
        className={clsx(
          helperText.match('Valor total') ? 'text-primary-500' : 'text-gray-800'
        )}
      >
        {infoText}
      </Text>
      {iconRight && iconRight}
    </li>
  )
}
