import clsx from 'clsx'
import Bank from '@/assets/icon/Bank'
import ButtonDropdown from '@/assets/icon/ButtonDropdown'
import GroupTargetTitle from '@/components/molecules/GroupTargetTitle'
import DropdownButton from '@/components/molecules/DropdownButton'
import Tag from '@/components/organisms/Tag'

interface GroupSponsorsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const sponsors = ['Colgate', 'Grupo Ultra', 'Electrolux']

export default function GroupSponsors({
  className,
  ...props
}: GroupSponsorsProps) {
  return (
    <div className={clsx(className)} {...props}>
      <GroupTargetTitle iconLeft={<Bank />}>Patrocinadores</GroupTargetTitle>
      <div className="mt-4 flex gap-1">
        {sponsors.map((sponsor) => (
          <Tag
            key={sponsor}
            fontStyle="smm"
            className="px-[0.625rem]"
            text={sponsor}
          />
        ))}
      </div>
      <DropdownButton iconRight={<ButtonDropdown />}>Ver mais</DropdownButton>
    </div>
  )
}
