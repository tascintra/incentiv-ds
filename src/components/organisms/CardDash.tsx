import clsx from 'clsx'
import Text from '@/components/atoms/Text'
import Heading from '@/components/atoms/Heading'
import ProgressBar from '@/assets/icon/ProgressBar'
import Information from '@/assets/icon/Information'
import ProjectDetails from './ProjectDetails'

interface CardDashProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const projectDetailsInfo = [
  {
    helperText: 'Valor total do projeto',
    infoText: 'R$1.000.000,00',
    iconLeft: '',
    iconRight: '',
  },
  {
    helperText: 'Meta mínima',
    infoText: 'R$500.000,00',
    iconLeft: '',
    iconRight: <Information />,
  },
  {
    helperText: 'Prazo de captação',
    infoText: '31/12/2023',
    iconLeft: '',
    iconRight: '',
  },
]

export default function CardDash({ className }: CardDashProps) {
  return (
    <div className={clsx('w-full rounded-lg bg-gray-100 px-6 py-4', className)}>
      <Text fontStyle="xlb" className="text-gray-800">
        Valor captado
      </Text>
      <Text fontStyle="xsr" className="text-gray-500">
        Atualizado em 01/04/2023
      </Text>
      <div className="mt-2 flex items-center gap-1 text-primary-500">
        <Heading as="h5" fontStyle="h5">
          R$
        </Heading>
        <Heading as="h4" fontStyle="h4">
          478.410,00
        </Heading>
      </div>
      <ProgressBar className="mt-4" />
      <ul className="mt-4 flex flex-col gap-1">
        {projectDetailsInfo.map(
          ({ helperText, infoText, iconLeft, iconRight }) => (
            <ProjectDetails
              key={helperText}
              helperText={helperText}
              infoText={infoText}
              iconLeft={iconLeft}
              iconRight={iconRight}
            />
          )
        )}
      </ul>
    </div>
  )
}
