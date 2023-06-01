import Image from 'next/image'
import Link from 'next/link'
import LogoIncentiv from '@/assets/logo/incentiv-logo.svg'
import EducationPencil from '@/assets/icon/EducationPencil'

interface NavbarCloseModalProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export default function NavbarCloseModal(props: NavbarCloseModalProps) {
  return (
    <div className="py-4 shadow-border-b" {...props}>
      <div className="m-auto flex max-w-7xl justify-between">
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
