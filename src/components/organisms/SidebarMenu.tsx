import InvestigationIcon from '@/assets/icon/investigation.svg'
import IdeaIcon from '@/assets/icon/idea.svg'
import BusinessIcon from '@/assets/icon/business.svg'
import SidebarMenuItem from '@/components/molecules/SidebarMenuItem'

type Props = {}

const menuElements = [
  { icon: InvestigationIcon, text: 'Calcular potencial' },
  { icon: IdeaIcon, text: 'Elaborar' },
  { icon: BusinessIcon, text: 'Monitorar' },
]

export default function SidebarMenu({}: Props) {
  return (
    <menu>
      {menuElements.map(({ icon, text }) => (
        <SidebarMenuItem key={text} icon={icon} text={text} />
      ))}
    </menu>
  )
}
