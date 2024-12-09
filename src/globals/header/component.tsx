'use client'

import type { Header } from '@/payload-types'

import React from 'react'
import { NavItems } from './Nav'


export const HeaderNav = () => {

  return (
    <React.Fragment>
     <NavItems header={Header} />
    </React.Fragment>
  )
}
