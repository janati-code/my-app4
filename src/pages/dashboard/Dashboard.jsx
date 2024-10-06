import React from 'react'
import Sidebar from './Sidebar'
import List from '../dashboard/List'
import { DashboardContextProvider } from '../../components/context/dashboardContext'

const Dashboard = () => {
    return (
        <>
            <DashboardContextProvider>
                <section>
                    <div className='grid grid-cols-12 bg-gray-300 p-2'>
                    <div className='col-span-4 bg-white  h-screen m-4 rounded-2xl overflow-y-scroll'><Sidebar /></div>
                    <div className='col-span-8 bg-white h-screen  m-4 rounded-2xl flex justify-center items-center overflow-y-scroll'><List /></div>
                   
                    </div>
                </section>
            </DashboardContextProvider>
        </>
    )
}

export default Dashboard