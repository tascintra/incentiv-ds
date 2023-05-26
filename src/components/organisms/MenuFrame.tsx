import clsx from 'clsx'
import HomeIcon from '@/assets/icon/home.svg'
import FolderIcon from '@/assets/icon/folder.svg'
import BellIcon from '@/assets/icon/bell.svg'
import MenuFrameItem from '@/components/organisms/MenuFrameItem'

interface MenuFrameProps extends React.MenuHTMLAttributes<HTMLElement> {}

const menuElements = [
  { icon: HomeIcon, text: 'Home', alt: 'Home', action: '' },
  {
    icon: FolderIcon,
    text: 'Meus projetos',
    alt: 'Projetos',
    action: '',
  },
  {
    icon: BellIcon,
    text: 'Notificações',
    alt: 'Notificações',
    action: 'notify',
  },
]

export default function MenuFrame({ className, ...props }: MenuFrameProps) {
  return (
    <menu className={clsx('flex flex-col gap-4', className)}>
      {menuElements.map(({ icon, text, alt, action }) => (
        <MenuFrameItem
          key={alt}
          icon={icon}
          iconAlt={alt}
          text={text}
          action={action}
          {...props}
        />
      ))}
    </menu>
  )
}
