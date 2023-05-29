import clsx from 'clsx'
import ProjectShowCaseHead from '@/components/organisms/ProjectShowCaseHead'

interface ShowcaseProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export default function ProjectShowcase({ className }: ShowcaseProps) {
  return (
    <div className={clsx(className)}>
      <ProjectShowCaseHead />
    </div>
  )
}
