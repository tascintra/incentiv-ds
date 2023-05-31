import { ReactNode } from 'react'

export interface CommonTextProps {
  children: ReactNode
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
