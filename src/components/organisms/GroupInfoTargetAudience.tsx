import Target from '@/assets/icon/Target'
import UserMultiple from '@/assets/icon/UserMultiple'
import GolfHole from '@/assets/icon/GolfHole'
import Tag from '@/components/organisms/Tag'
import GroupTargetTitle from '@/components/molecules/GroupTargetTitle'

export default function GroupInfoTargetAudience() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <GroupTargetTitle iconLeft={<Target />}>Público alvo</GroupTargetTitle>
        <div className="flex gap-1">
          <Tag fontStyle="smm" className="px-[0.625rem]" text="Mulheres" />
          <Tag fontStyle="smm" className="px-[0.625rem]" text="PCD" />
          <Tag fontStyle="smm" className="px-[0.625rem]" text="Baixa renda" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <GroupTargetTitle iconLeft={<GolfHole />}>
          Meta de beneficiários
        </GroupTargetTitle>
        <div className="flex gap-1">
          <Tag
            fontStyle="smm"
            className="px-[0.625rem]"
            text="250.000 mil pessoas"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <GroupTargetTitle iconLeft={<UserMultiple />}>
          Faixa etária
        </GroupTargetTitle>
        <div className="flex gap-1">
          <Tag fontStyle="smm" className="px-[0.625rem]" text="Criança" />
          <Tag fontStyle="smm" className="px-[0.625rem]" text="Adolescente" />
        </div>
      </div>
    </div>
  )
}
