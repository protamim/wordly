import { HeaderNav } from '@/globals/header'
import React from 'react'

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <React.Fragment>
      <html lang="en">
        <head>
          <link rel="icon" href="/bmw-logo.svg" />
        </head>
        <body>
          <HeaderNav />
          <main>{children}</main>
        </body>
      </html>
    </React.Fragment>
  )
}

export default RootLayout
