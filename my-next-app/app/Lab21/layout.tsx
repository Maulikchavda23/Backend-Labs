import React from 'react'
import Link from 'next/link'

function layout({children} : {children : React.ReactNode}) {
  return (
    <div className='bg-blue-400'>
        <nav className='bg-amber-700'>
            <Link href="/Lab21" className='p-2'>Lab21</Link>
            <Link href="/Lab21/templete1" className='p-2'>Temp1</Link>
            <Link href="/Lab21/templete2" className='p-2'>Temp2</Link>
            <Link href="/Lab21/templete3" className='p-2'>Temp3</Link>
        </nav>
        {children}
    </div>
  )
}

export default layout