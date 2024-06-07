import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <Link href={'/Viewauctions'}>Home</Link>
        <Link href={'/Search'}>Search</Link>
    </div>
  )
}
