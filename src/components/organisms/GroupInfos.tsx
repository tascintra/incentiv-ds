import GroupInfoTargetAudience from '@/components/organisms/GroupInfoTargetAudience'
import GroupInfoPlaces from '@/components/organisms/GroupInfoPlaces'
import GroupSponsors from '@/components/organisms/GroupSponsors'

export default function GroupInfos() {
  return (
    <div className="flex max-w-xs flex-col px-2 pb-2 pt-4">
      <GroupInfoTargetAudience />
      <span className="mt-6 w-full border-b border-neutral-200" />
      <GroupInfoPlaces className="mt-5" />
      <span className="mt-4 w-full border-b border-neutral-200" />
      <GroupSponsors className='mt-5' />
    </div>
  )
}
