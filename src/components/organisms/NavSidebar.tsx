import NavHead from '@/components/molecules/NavHead'
import IdentityFrame from '@/components/organisms/IdentityFrame'
import MenuFrame from '@/components/organisms/MenuFrame'
import SolutionsFrame from '@/components/organisms/SolutionsFrame'
import SidebarMenu from '@/components/organisms/SidebarMenu'

export default function NavSidebar() {
  return (
    <nav className="flex h-screen min-h-[960px] w-full max-w-xs flex-col gap-4 px-5 py-4 shadow-sidebar">
      <NavHead />
      <IdentityFrame className="mb-4" />
      <MenuFrame />
      <SolutionsFrame />
      <SidebarMenu />
    </nav>
  )
}
