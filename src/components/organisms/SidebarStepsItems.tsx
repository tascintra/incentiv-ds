import StepsItem from '../molecules/StepsItem'
import { StepsItemType } from '@/@types/types'

interface StepsItemsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {}

const sidebarItems: StepsItemType[] = [
  { progress: 'done', processName: 'Dados básicos do projeto' },
  { progress: 'done', processName: 'Resumo e objetivos' },
  { progress: 'done', processName: 'ODS e impacto' },
  { progress: 'done', processName: 'Documentação' },
  { progress: 'done', processName: 'Imagens e vídeo' },
  { progress: 'current', processName: 'Valor do projeto e incentivos' },
  { progress: 'next', processName: 'Contrapartidas' },
]

export default function SidebarStepsItems(props: StepsItemsProps) {
  return (
    <ul {...props}>
      {sidebarItems.map(({ progress, processName }, index) => (
        <div key={processName}>
          <StepsItem
            progress={progress}
            processName={processName}
            className="my-2"
          />
          {index < sidebarItems.length - 1 && (
            <span className="ml-[9px] h-6 border-r border-r-neutral-300" />
          )}
        </div>
      ))}
    </ul>
  )
}
