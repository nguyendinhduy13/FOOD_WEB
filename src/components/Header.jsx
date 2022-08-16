import React from 'react'

export default function Header() {
  return (
    <div className='w-screen fixed z-50 bg-slate-300 p-6 px-16'>
        {/* desktop & tablet */}
        <div className='hidden md:flex w-full bg-red-600'></div>

        {/* mobile */}
        <div className='flex md:hidden w'></div>
    </div>
  )
}