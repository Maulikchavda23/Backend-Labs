import React from 'react'
import Link from 'next/link'

function layout({children} : {children : React.ReactNode}) {
  return (
    <div className='bg-blue-400'>
        <nav className='bg-amber-700'>
            <Link href="/Lab20" className='p-2'>Lab20</Link>
            <Link href="/Lab20/home" className='p-2'>Home</Link>
            <Link href="/Lab20/about" className='p-2'>About</Link>
            <Link href="/Lab20/contact" className='p-2'>Contact</Link>
        </nav>
        {children}
    </div>
  )
}

export default layout