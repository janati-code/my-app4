import {useContext} from 'react'
import Card from './Card'
import { DashboardContext } from '../../components/context/dashboardContext'

const NamesList = () => {

    const {list}= useContext(DashboardContext);


  return (
    <div className='flex flex-col w-full min-h-screen p-10'>
    {
    list.map((item, index) => {
       
        return (
          
          <Card key={index} item={item} />
          
        )
      })
    }
    </div>
    
  )
}

export default NamesList