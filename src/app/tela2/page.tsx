'use client'
import { FormEvent } from 'react'
import Heading from '@/components/atoms/Heading'
import Text from '@/components/atoms/Text'
import InputBox from '@/components/organisms/InputBox'
import NavbarCloseModal from '@/components/molecules/NavbarCloseModal'
import SidebarStepsItems from '@/components/organisms/SidebarStepsItems'

interface IInputInfos {
  requiredField: boolean
  id: string
  label: string
  placeholder: string
  icon: 'info' | ''
  button?: boolean
}

const inputInfos: IInputInfos[] = [
  {
    requiredField: true,
    id: 'approved',
    label: 'Valor aprovado em lei',
    placeholder: 'R$',
    icon: '',
  },
  {
    requiredField: true,
    id: 'minimum',
    label: 'Valor mínimo da execução',
    placeholder: 'R$',
    icon: 'info',
  },
  {
    requiredField: true,
    id: 'approvalDate',
    label: 'Data de aprovação',
    placeholder: 'DD / MM / AAAA',
    icon: '',
  },
  {
    requiredField: true,
    id: 'fundingPeriod',
    label: 'Prazo de captação',
    placeholder: 'DD / MM / AAAA',
    icon: '',
  },
  {
    requiredField: false,
    id: 'amountRaised',
    label: 'Valor captado até o momento',
    placeholder: 'R$',
    icon: '',
  },
  {
    requiredField: false,
    id: 'mainSupporters',
    label: 'Principais incentivadores',
    placeholder: 'Ex: Nubank, Bradesco...',
    icon: 'info',
  },
  {
    requiredField: false,
    id: 'SupOtherEditions',
    label: 'Incentivadores de outras edições',
    placeholder: 'Ex: Nubank, Bradesco...',
    icon: 'info',
  },
]

export default function Tela2() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <>
      <NavbarCloseModal />
      <div className="m-auto flex max-w-7xl justify-between">
        <aside className="m-auto h-screen w-full max-w-[280px] shadow-border-r">
          <SidebarStepsItems className="mt-14" />
        </aside>
        <main className="w-full">
          <div className="ml-auto mt-12 max-w-[800px]">
            <header>
              <Text fontStyle="smr" className="text-neutral-500">
                Cadastro de Projeto
              </Text>
              <Heading as="h2" fontStyle="h2" className="text-neutral-800">
                Valor do projeto e incentivos
              </Heading>
            </header>

            <form onSubmit={handleSubmit} className="mt-12">
              <div className="grid grid-cols-2 grid-rows-5 gap-8 [&>*:nth-child(n+5)]:col-custom">
                {inputInfos.map(
                  ({ icon, id, label, placeholder, requiredField }) => (
                    <InputBox
                      key={id}
                      id={id}
                      label={label}
                      placeholder={placeholder}
                      required={requiredField}
                      rightIcon={icon}
                    />
                  )
                )}
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  )
}
