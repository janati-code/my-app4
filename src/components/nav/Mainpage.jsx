import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar';
import NavPage from './NavPage';

const Mainpage = () => {
  return (
    <React.Fragment >
        {/* heading */}
        <section>
            <div><Navbar /></div>
        </section>

         {/* sidebar */}
         <section>
            <div className='grid grid-cols-12 bg-gray-300'>
            <div className='col-span-3 bg-gray-400 h-screen '><Sidebar /></div>
            <div className='col-span-9 bg-white h-screen flex justify-center items-center'><NavPage /></div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default Mainpage