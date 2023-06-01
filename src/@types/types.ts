export interface CommonTextProps {
  children: React.ReactNode
  className?: string
}

export type TextStyles = {
  fontStyle?:
    | 'xsr'
    | 'xsm'
    | 'smr'
    | 'smm'
    | 'sms'
    | 'smb'
    | 'mdm'
    | 'mds'
    | 'xlb'
  as?: 'p' | 'span'
}

export type StepsItemType = {
  progress: 'done' | 'current' | 'next'
  processName: string
}

export type CompanyType = {
  companyLogo: HTMLImageElement
  companyName: string
  totalValue: string
  contributions: number
}
