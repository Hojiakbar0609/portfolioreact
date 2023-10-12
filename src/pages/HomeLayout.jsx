import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
  return (
      <>
          <section className='bg-black'>
              <div className='container max-w-[1200px] mx-auto'>        
                <Navbar />
                <Outlet/>
          
            </div>    
          </section>
    </>
  )
}

export default HomeLayout