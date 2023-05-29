import clsx from 'clsx'
import ProjectShowCaseHead from '@/components/organisms/ProjectShowCaseHead'
import HorizontalTabs from '@/components/organisms/HorizontalTabs'

interface ShowcaseProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export default function ProjectShowcase({ className }: ShowcaseProps) {
  return (
    <div className={clsx('border-b border-gray-200', className)}>
      <ProjectShowCaseHead />
      <HorizontalTabs className="mt-6" />
    </div>
  )
}
