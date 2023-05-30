import ProjectStatusCard from '@/components/organisms/ProjectStatusCard'
import CardDash from '@/components/organisms/CardDash'

interface Props {}

export default function ShowcaseSidebar({}: Props) {
  return (
    <div className="mt-20 flex w-full min-w-[308px] flex-col gap-3">
      <ProjectStatusCard />
      <CardDash />
    </div>
  )
}
