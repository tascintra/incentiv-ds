import React from 'react'
import GroupInfoTargetAudience from '@/components/organisms/GroupInfoTargetAudience'

type Props = {}

export default function GroupInfos({}: Props) {
  return (
    <div className="flex flex-col px-2 pb-2 pt-4">
      <GroupInfoTargetAudience />
      <span className="mt-6 w-full border-b border-neutral-200" />
    </div>
  )
}
