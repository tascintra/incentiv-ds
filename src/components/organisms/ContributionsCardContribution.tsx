import ContributionsCardInfo from '@/components/molecules/ContributionsCardInfo'

interface ContributionsCardContributionsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  infoHeader: string
  infoText: string
}

export default function ContributionsCardContribution({
  infoHeader,
  infoText,
}: ContributionsCardContributionsProps) {
  return (
    <li>
      <ContributionsCardInfo infoHeader={infoHeader} infoText={infoText} />
    </li>
  )
}
