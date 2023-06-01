import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import LogoIncentiv from '@/assets/logo/incentiv-logo.svg'
import EducationPencil from '@/assets/icon/EducationPencil'

interface NavbarCloseModalProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export default function NavbarCloseModal({
  className,
  ...props
}: NavbarCloseModalProps) {
  return (
    <div className={clsx('py-4 shadow-border-b', className)} {...props}>
      <div className="m-auto flex max-w-7xl items-center justify-between">
        <Link href="/">
          <Image src={LogoIncentiv} alt="Logo Incentiv" />
        </Link>

        <Link href="/">
          <EducationPencil className="cursor-pointer" />
        </Link>
      </div>
    </div>
  )
}
