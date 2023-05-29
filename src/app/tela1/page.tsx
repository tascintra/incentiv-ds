import VisionSquareButton from '@/assets/icon/VisionSquare'
import LayoutColumn from '@/assets/icon/LayoutColumn'
import NubankAvatar from '@/assets/logo/nubank.svg'
import RiachuelloAvatar from '@/assets/logo/riachuello.svg'
import GoogleAvatar from '@/assets/logo/google.svg'
import CobasiAvatar from '@/assets/logo/cobasi.svg'
import PetloveAvatar from '@/assets/logo/petlove.svg'
import OutlinedButton from '@/components/molecules/OutlinedButton'
import MainHead from '@/components/molecules/MainHead'
import ButtonGroup from '@/components/organisms/ButtonGroup'
import NavSidebar from '@/components/organisms/NavSidebar'
import IconButton from '@/components/atoms/IconButton'
import MessageBanner from '@/components/molecules/MessageBanner'
import CardProp from '@/components/organisms/CardProp'

interface companiesType {
  companyName: string
  companyAvatar: HTMLImageElement
  projectName: string
  tagsInfo: {
    time: string
    rating: string
    icon: 'heart'
  }
}

const baseItemsBg = [
  { label: 'Interesse', items: 5 },
  { label: 'Negociação', items: 1 },
  { label: 'Due Diligence', items: 0 },
  { label: 'Formalização', items: 0 },
  { label: 'Aporte', items: 0 },
]

const companiesInfo: companiesType[] = [
  {
    companyName: 'Nubank SA',
    companyAvatar: NubankAvatar,
    projectName: 'Saúde Integral III',
    tagsInfo: { time: '15 dias', rating: '4,8', icon: 'heart' },
  },
  {
    companyName: 'Riachuello',
    companyAvatar: RiachuelloAvatar,
    projectName: 'Saúde Integral III',
    tagsInfo: { time: '15 dias', rating: '4,8', icon: 'heart' },
  },
  {
    companyName: 'Google',
    companyAvatar: GoogleAvatar,
    projectName: 'Saúde Integral III',
    tagsInfo: { time: '15 dias', rating: '4,8', icon: 'heart' },
  },
  {
    companyName: 'Cobasi',
    companyAvatar: CobasiAvatar,
    projectName: 'Saúde Integral III',
    tagsInfo: { time: '15 dias', rating: '4,8', icon: 'heart' },
  },
  {
    companyName: 'Petlove',
    companyAvatar: PetloveAvatar,
    projectName: 'Saúde Integral III',
    tagsInfo: { time: '15 dias', rating: '4,8', icon: 'heart' },
  },
]

export default function Tela1() {
  return (
    <div className="flex">
      <aside>
        <NavSidebar />
      </aside>
      <main className="w-full max-w-6xl px-8 py-6">
        <MainHead />
        <div className="flex items-center justify-between gap-8 pt-8">
          <ButtonGroup baseItems={baseItemsBg} />
          <div className="flex w-full max-w-[218px] items-center gap-5">
            <OutlinedButton arrow>Ordenar por</OutlinedButton>
            <span className="h-[18px] border-r border-gray-300" />
            <IconButton icon={<VisionSquareButton />} selected />
            <IconButton icon={<LayoutColumn />} />
          </div>
        </div>
        <MessageBanner
          className="mt-8"
          message="👏 Incrível! As empresas abaixo estão interessadas em saber mais sobre um de seus projetos."
        />
        <div className="mt-5 grid grid-cols-4 gap-3">
          {companiesInfo.map(
            ({ companyName, companyAvatar, projectName, tagsInfo }) => (
              <CardProp
                key={companyName}
                companyAvatar={companyAvatar}
                companyName={companyName}
                projectName={projectName}
                tagsInfo={tagsInfo}
              />
            )
          )}
        </div>
      </main>
    </div>
  )
}
