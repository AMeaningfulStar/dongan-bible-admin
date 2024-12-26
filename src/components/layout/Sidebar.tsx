'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'

import { navigationData } from '@/libs/navigationData'
import { usePathname } from 'next/navigation'

export function Sidebar() {
  return (
    <div className="w-1/6 min-w-56 rounded-2xl bg-gl-grayscale-100 p-2">
      <div className="bg-gl-green-opacity-40 flex h-full w-full flex-col rounded-xl p-6">
        {navigationData.map((navigator, idx) => (
          <MenuList key={idx} title={navigator.title}>
            {navigator.navigation.map((item, idx) => (
              <Menu key={idx} title={item.titel} href={item.path} />
            ))}
          </MenuList>
        ))}
      </div>
    </div>
  )
}

interface MenuListProps {
  children: React.ReactNode
  title: string
}

export function MenuList({ children, title }: MenuListProps) {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-2">
        <span className="text-layout-16-b ml-1">{title}</span>
        <div className="bg-gl-grayscale-300 h-px w-full" />
      </div>
      <div className="flex flex-col gap-y-3">{children}</div>
    </div>
  )
}

interface MenuProps {
  title: string
  href: string
}

export function Menu({ title, href }: MenuProps) {
  const [isHover, setIsHover] = useState<boolean>(false)
  const pathName = usePathname()

  return (
    <Link
      href={href}
      className="flex gap-x-2"
      onMouseEnter={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <div
        className={clsx(
          'h-3.5 w-px',
          pathName === href ? 'bg-black' : isHover ? 'bg-gl-grayscale-300' : 'bg-gl-grayscale-200',
        )}
      />
      <div
        className={clsx(
          'text-layout-14-r',
          pathName === href ? '' : isHover ? 'text-gl-grayscale-300' : 'text-gl-grayscale-200',
        )}
      >
        {title}
      </div>
    </Link>
  )
}
