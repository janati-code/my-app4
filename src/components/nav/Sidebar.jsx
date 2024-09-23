import React from 'react'
import { SidebarData } from '../../data/SidebarData'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
  return (
    <React.Fragment>
        <section>
            <div className='text-white '>
            {
                    SidebarData.map((item,index)=>{
                        return(
                            <div key={index} className='p-5 border-b text-center hover:bg-green-800 bg-green-700 font-bold' >
                               <NavLink to={item.path} >
                                <span>{item.title}</span>
                               </NavLink>
                            </div>

                        )
                    })
                }
                
            </div>
        </section>
    </React.Fragment>
            )}


export default Sidebar