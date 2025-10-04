import React from 'react'
import LeftNav from './components/LeftNav'
import RightNav from './components/RightNav'

const Navbar = () => {
  return (
    <>
        <section className='bg-slate-700 sticky top-0'>
            <div className="w-[1144px] mx-auto">
                <nav className='flex items-center w-full py-3'>
                    <LeftNav/>
                    <RightNav/>
                </nav>
            </div>
        </section>
    </>
  )
}

export default Navbar