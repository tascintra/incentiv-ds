import Image from 'next/image'
import clsx from 'clsx'
import MenuIcon from '@/assets/icon/menu-icon.svg'
import IncentivLogo from '@/assets/logo/incentiv-logo.svg'

interface MenuElement extends React.MenuHTMLAttributes<HTMLElement> {}

export default function NavHead({ className, ...props }: MenuElement) {
  return (
    <menu className={clsx('flex w-full gap-3 p-2', className)} {...props}>
      <li>
        <button>
          <Image src={MenuIcon} alt="Ícone Menu" />
        </button>
      </li>
      <li>
        <a href="/">
          <Image src={IncentivLogo} alt="Logo Incentiv" />
        </a>
      </li>
    </menu>
  )
}
