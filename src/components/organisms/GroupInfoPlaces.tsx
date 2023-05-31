import clsx from 'clsx'
import Location from '@/assets/icon/Location'
import ButtonDropdown from '@/assets/icon/ButtonDropdown'
import GroupTargetTitle from '@/components/molecules/GroupTargetTitle'
import DropdownButton from '@/components/molecules/DropdownButton'
import Tag from '@/components/organisms/Tag'

interface GroupInfoPlacesProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const places = [
  'Florianópolis, SC',
  'Santa Catarina, SC',
  'Rio Grande do Sul, RS',
  'Paraná, PA',
  'São José dos Pinhais, PA',
]

export default function GroupInfoPlaces({
  className,
  ...props
}: GroupInfoPlacesProps) {
  return (
    <div className={clsx('max-w-full', className)} {...props}>
      <div className="flex items-center gap-2">
        <GroupTargetTitle iconLeft={<Location />}>
          Locais de realização
        </GroupTargetTitle>
        <Tag fontStyle="xsm" fill="outline" text="Flexível" />
      </div>
      <div className="mt-4 flex flex-wrap gap-x-1 gap-y-2">
        {places.map((place) => (
          <Tag
            key={place}
            fontStyle="smm"
            className="px-[0.625rem]"
            text={place}
          />
        ))}
      </div>
      <DropdownButton iconRight={<ButtonDropdown />}>Ver mais</DropdownButton>
    </div>
  )
}
