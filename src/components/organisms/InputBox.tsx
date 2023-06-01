import Information from '@/assets/icon/Information'
import Text from '../atoms/Text'
import clsx from 'clsx'

interface InputBoxProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  id: string
  label?: string
  placeholder?: string
  required?: boolean
  rightIcon?: 'info' | ''
}

export default function InputBox({
  id,
  label,
  placeholder,
  required,
  rightIcon = 'info',
  className,
}: InputBoxProps) {
  const icons = {
    info: <Information />,
    '': '',
  }

  return (
    <div className={clsx('flex flex-col gap-1', className)}>
      <label htmlFor={id} className="flex items-center gap-1">
        {required && (
          <Text as="span" fontStyle="smm" className="text-info-destructive-500">
            *
          </Text>
        )}
        <Text as="span" fontStyle="smm" className="text-neutral-800">
          {label}
        </Text>
        {!required && (
          <Text as="span" className="text-sm italic text-neutral-400">
            (Opcional)
          </Text>
        )}
        {icons[rightIcon]}
      </label>
      <input
        type="text"
        name={id}
        id={id}
        placeholder={placeholder}
        className="rounded-md border border-neutral-200 px-3 py-[0.625rem] shadow-xs outline-none focus:border-primary-300 focus:shadow-input-focus"
      />
    </div>
  )
}
