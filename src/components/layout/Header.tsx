import Image from 'next/image'
import Link from 'next/link'

import Logo_Icon from '@icon/logo_icon.png'

export function Header() {
  return (
    <div className="rounded-2xl bg-gl-green-opacity-50 p-2">
      <Link href={'/main'} className="flex w-fit items-center gap-x-2.5 rounded-lg hover:bg-gl-green-opacity-30">
        <Image alt="logo_image" src={Logo_Icon} width={48} height={48} priority={false} quality={75} />
        <div className="flex items-end gap-x-3 pr-2">
          <span className="text-layout-28-b">청신호</span>
          <span className="text-layout-24-b text-gl-grayscale-100">Administration</span>
        </div>
      </Link>
    </div>
  )
}
