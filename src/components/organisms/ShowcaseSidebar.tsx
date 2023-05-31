import ProjectStatusCard from '@/components/organisms/ProjectStatusCard'
import CardDash from '@/components/organisms/CardDash'
import GroupInfos from '@/components/organisms/GroupInfos'

export default function ShowcaseSidebar() {
  return (
    <div className="mt-20 flex w-full min-w-[308px] flex-col gap-3">
      <ProjectStatusCard />
      <CardDash />
      <GroupInfos />
    </div>
  )
}
