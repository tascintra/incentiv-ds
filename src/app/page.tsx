import Image from 'next/image'
import Link from 'next/link'
import IncentivLogoDs from '@/assets/logo/incentiv-ds.svg'

import Text from '@/components/atoms/Text'

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-8">
      <Image src={IncentivLogoDs} width={332} height={96} alt="Logo Incentiv" />
      <ul className="flex divide-x divide-gray-300 overflow-hidden rounded-lg border border-gray-300 bg-white shadow-xs">
        <li>
          <Link href="/tela1">
            <div className="px-8 py-4 hover:bg-gray-50">
              <Text fontStyle="mds">Tela 1</Text>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/tela2">
            <div className="px-8 py-4 hover:bg-gray-50">
              <Text fontStyle="mds">Tela 2</Text>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/tela3">
            <div className="px-8 py-4 hover:bg-gray-50">
              <Text fontStyle="mds">Tela 3</Text>
            </div>
          </Link>
        </li>
      </ul>
    </main>
  )
}
