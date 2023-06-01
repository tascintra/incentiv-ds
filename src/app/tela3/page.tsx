import PlusSign from '@/assets/icon/PlusSign'
import ButtonOutlined from '@/components/molecules/ButtonOutlined'
import Breadcrumb from '@/components/organisms/Breadcrumb'
import ButtonGroup from '@/components/organisms/ButtonGroup'
import ContributionsCard from '@/components/organisms/ContributionsCard'
import NavSidebar from '@/components/organisms/NavSidebar'
import ProjectShowcase from '@/components/organisms/ProjectShowcase'
import ShowcaseSidebar from '@/components/organisms/ShowcaseSidebar'
import SulamericaLogo from '@/assets/logo/sulamerica.svg'
import KablinLogo from '@/assets/logo/kablin.svg'
import NubankLogo from '@/assets/logo/nubank.svg'

const baseItemsBg = [
  { label: 'Captado via Incentiv' },
  { label: 'Captação externa' },
]

const companies = [
  {
    companyLogo: SulamericaLogo,
    companyName: 'Sulamerica',
    totalValue: '700.000,00',
    contributions: 4,
  },
  {
    companyLogo: KablinLogo,
    companyName: 'Klabin',
    totalValue: '700.000,00',
    contributions: 2,
  },
  {
    companyLogo: NubankLogo,
    companyName: 'Nubank',
    totalValue: '700.000,00',
    contributions: 3,
  },
]

export default function Tela3() {
  return (
    <div className="flex justify-between">
      <aside>
        <NavSidebar />
      </aside>
      <main className="w-full max-w-3xl px-8 py-6">
        <Breadcrumb />
        <ProjectShowcase className="mt-9" />
        <div className="mt-10 flex items-center justify-between">
          <ButtonGroup
            baseItems={baseItemsBg}
            className="max-w-xs text-gray-900"
            fontSize="smm"
          />
          <ButtonOutlined iconLeft={<PlusSign />}>
            Adicionar captação
          </ButtonOutlined>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          {companies.map((company) => (
            <ContributionsCard key={company.companyName} />
          ))}
        </div>
      </main>
      <aside className="mx-4 justify-self-end">
        <ShowcaseSidebar />
      </aside>
    </div>
  )
}
