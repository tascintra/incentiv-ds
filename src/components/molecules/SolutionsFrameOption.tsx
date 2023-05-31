import Image from 'next/image'
import clsx from 'clsx'
import Text from '@/components/atoms/Text'

interface FrameOptionProps
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  option: string
  icon: HTMLImageElement
  active: boolean
}

export default function SolutionsFrameOption({
  option,
  icon,
  active,
  onClick,
}: FrameOptionProps) {
  return (
    <li
      key={option}
      className="flex cursor-pointer items-center pl-4"
      onClick={onClick}
    >
      <Image src={icon} alt="Conexão do menu" />
      <Text
        fontStyle="smm"
        className={clsx(
          'text-gray-500 hover:text-primary-500',
          active ? 'text-primary-500' : 'text-gray-500'
        )}
      >
        {option}
      </Text>
    </li>
  )
}
