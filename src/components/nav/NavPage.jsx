import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SidebarData } from '../../data/SidebarData'
import Home from '../../pages/Home'
// import Link1 from '../../pages/Link1'
// import Link2 from '../../pages/Link2'
// import Link3 from '../../pages/Link3'
// import Link4 from '../../pages/Link4'
// import Link5 from '../../pages/Link5'

function NavPage() {
  return (
   <React.Fragment>
    <section>
        <Routes>
          
              {SidebarData.map((item,index) => {
                console.log(SidebarData[index]);
                return(
                <Route key={index} path={item.path} element={<Home data={SidebarData[index]}  />} />
                )
              })}
         
        </Routes>
      
    </section>
    </React.Fragment>
  )
}


 
          
export default NavPage