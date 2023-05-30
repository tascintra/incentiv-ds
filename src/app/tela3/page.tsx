import Breadcrump from '@/components/organisms/Breadcrump'
import ButtonGroup from '@/components/organisms/ButtonGroup'
import NavSidebar from '@/components/organisms/NavSidebar'
import ProjectShowcase from '@/components/organisms/ProjectShowcase'
import ShowcaseSidebar from '@/components/organisms/ShowcaseSidebar'

const baseItemsBg = [
  { label: 'Captado via Incentiv' },
  { label: 'Captação externa' },
]

export default function Tela3() {
  return (
    <div className="flex">
      <aside>
        <NavSidebar />
      </aside>
      <main className="w-full max-w-3xl px-8 py-6">
        <Breadcrump />
        <ProjectShowcase className="mt-9" />
        <div className="mt-10">
          <ButtonGroup
            baseItems={baseItemsBg}
            className="max-w-xs text-gray-900"
            fontSize="smm"
          />
        </div>
      </main>
      <aside className="ml-4">
        <ShowcaseSidebar />
      </aside>
    </div>
  )
}
