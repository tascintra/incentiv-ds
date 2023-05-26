import Image from 'next/image'
import NotificationIcon from '@/assets/icon/notification.svg'
import Text from '@/components/atoms/Text'

interface ItemProps {
  icon: HTMLImageElement
  text: string
  iconAlt: string
  action: string
}

export default function MenuFrameItem({ icon, text, iconAlt, action }: ItemProps) {
  return (
    <li className="flex cursor-pointer gap-3 p-1">
      <Image src={icon} alt={iconAlt} />
      <Text smm className="text-gray-500">
        {text}
      </Text>
      {action === 'notify' && <Image src={NotificationIcon} alt="Notificações" />}
    </li>
  )
}
