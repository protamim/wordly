'use client'

import type { Header as HeaderType } from '@/payload-types'
import Link from 'next/link'
import React from 'react'

export const NavItems: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.items || []

  return (
    <React.Fragment>
      <nav>
        <ul>
          {navItems?.map((item, i) => (
            <li key={i}>
              <Link href={item?.link || ''}>{item?.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  )
}