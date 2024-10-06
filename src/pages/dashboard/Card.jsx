import React from 'react'
import {useContext} from 'react'
import { DashboardContext } from '../../components/context/dashboardContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const Card = ({item}) => {

    const {deletefromList,editfromList}= useContext(DashboardContext);
    const itemId=item.rowId;

    function remove() 
    {
         deletefromList(itemId);
    }
    function fill() 
    {
         fillfromList(itemId);
    }

  return (
    <div className='bg-gray-100 w-full my-6 border rounded-xl border-orange-200 p-3 
    grid grid-cols-2 '>
        
        <p className='font-bold' > {item.name} {item.lname}</p>
        <p className='font-bold' > {item.level}</p>
        <p></p>
        <p className='font-bold' > {item.phone}</p>
        <p></p>
        <p className='font-bold' > {item.mail}</p>
        <div>
        <button className=' w-10 border-0  px-2 ' 
        onClick={remove}><FontAwesomeIcon icon={faTrash} style={{color: "#ff0000"}} /></button>
        <button className=' w-10 border-0  px-2 ' 
        onClick={fill}><FontAwesomeIcon icon={faEdit} style={{color: "#0c900"}} /></button>
        </div>
    </div>
  )
}

export default Card