import React from 'react'
import { headerStyles, headerNav } from '../styles/styles'
//Add reference to Link functionality from the Next core
import Link from 'next/link'
export default ({ children }) => (
  <header className={ headerStyles }>
    <h1>Page Title - {children}</h1>
    <ul className={ headerNav }>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
    </ul>
  </header>
)