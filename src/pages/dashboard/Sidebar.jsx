
import React, { useContext, useEffect, useRef, useState } from 'react'
// import { DashboardContext } from '../../components/context/dashboardContext';
// import { v4 as uuidv4 } from 'uuid';


const Sidebar = () => {

  const inputCls= 'border border-gray-400 rounded-md p-2 m-2 '
 
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskEmail, setTaskEmail] = useState('');
  const [taskPhone, setTaskPhone] = useState('');
  const [taskType, setTaskType] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setTaskName(value);
        break;
      case 'email':
        setTaskEmail(value);
        break;
      case 'phone':
        setTaskPhone(value);
        break;
      case 'type':
        setTaskType(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskName.trim() !== '' && taskEmail.trim() !== '' && taskPhone.trim() !== '' && taskType.trim() !== '') {
      if (editTaskId !== null) {
        const updatedTasks = tasks.map(task => {
          if (task.id === editTaskId) {
            return {
              ...task,
              name: taskName,
              email: taskEmail,
              phone: taskPhone,
              type: taskType
            };
          }
          return task;
        });
        setTasks(updatedTasks);
        setEditTaskId(null);
      } else {
        const newTask = {
          id: Date.now(),
          name: taskName,
          email: taskEmail,
          phone: taskPhone,
          type: taskType
        };
        setTasks([...tasks, newTask]);
      }
      setTaskName('');
      setTaskEmail('');
      setTaskPhone('');
      setTaskType('');
    }
  };

  const handleEdit = (id) => {
    const taskToEdit = tasks.find(task => task.id === id);
    if (taskToEdit) {
      setTaskName(taskToEdit.name);
      setTaskEmail(taskToEdit.email);
      setTaskPhone(taskToEdit.phone);
      setTaskType(taskToEdit.type);
      setEditTaskId(id);
    }
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    if (editTaskId === id) {
      setEditTaskId(null);
    }
  };

  return (
    <>
    <h1 className='py-4 bg-red-950 text-white text-3xl text-center'>User Form</h1>
    <div className="grid grid-cols-3  gap-3 border m-4 rounded-md border-gray-300">
     <div className='col-span-1 p-2 border-r-2 '> 
      <form className='flex flex-col justify-start items-start  ' onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name"
          placeholder="Name" 
          value={taskName} 
          className={inputCls}
          onChange={handleChange} 
        />
        <input 
          type="email" 
          name="email"
          placeholder="Email" 
          value={taskEmail} 
          className={inputCls}
          onChange={handleChange} 
        />
        <input 
          type="tel" 
          name="phone"
          placeholder="Phone" 
          value={taskPhone} 
          className={inputCls}
          onChange={handleChange} 
        />
        <select 
          name="type" 
          value={taskType} 
          className={inputCls}
          onChange={handleChange}
        >
          <option value="">Select Type</option>
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="Other">Other</option>
        </select>
        <button  className='bg-red-950 py-3 px-10 text-white rounded-md ml-2 my-6' type="submit">{editTaskId !== null ? 'Update Task' : 'Add Task'}</button>
      </form>
      </div>
      <ul className='col-span-2 p-3 flex-col '>
        {tasks.map(task => (
          <li key={task.id}>
            <div className='border border-red-200 rounded-md bg-slate-100 py-8 px-5 '>
              <strong>Name:</strong> {task.name}<br />
              <strong>Email:</strong> {task.email}<br />
              <strong>Phone:</strong> {task.phone}<br />
              <strong>Type:</strong> {task.type}
            </div>
            <div className='flex flex-row justify-end'>
              <button className='border border-red-200 rounded-md px-5 py-1 mx-3 my-4' onClick ={() => handleEdit(task.id)}>Edit</button>
              <button className='border border-red-200 rounded-md px-5 py-1 mx-3 my-4' onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

  
  
  // {
  // const { addtoList,formContent } = useContext(DashboardContext);
  // let nameref=useRef(null);
  // let lnameref=useRef(null);

  //   useEffect(()=>
  //     {
  //       nameref.current.value=formContent.name;
  //       lnameref.current.value=formContent.lname;

  //       console.log(formContent);

  //     },[formContent])
   

  //   function handleSubmit(e) {
  //     // Prevent the browser from reloading the page
  //     e.preventDefault();
  
  //     // Read the form data
  //     const form = e.target;
  //     const formData = new FormData(form);

  //      //  you can work with it as a plain object:
  //     const formJson = Object.fromEntries(formData.entries());
  //     addtoList(formJson);
  
  //     // or You can pass formData as a fetch body directly:
  //     // fetch('/some-api', { method: form.method, body: formData });
  
     
  //   }

   
  
  //   return (
  //     <form 
  //     className='py-16 px-10 grid grid-cols-2 text-gray-900 justify-center gap-4 
  //     w-full align-baseline'
  //       onSubmit={handleSubmit}>
  //         <input  type='hidden' name='rowId' defaultValue={uuidv4()}></input> 
  //       <label className=' ' >نام </label>
  //       <input type='text' ref={nameref} name="name"  className='rounded-lg border  shadow-md gray-700  py-2 px-2 mx-1'/>
  //         <label className=' w-full' >نام خانوادگی</label>
  //       <input type='text' ref={lnameref}name="lname"  className='rounded-lg border shadow-md gray-700 py-2 px-2 mx-1'/>
       
  //      <hr className='my-6'></hr>
  //      <p></p>
     
  //         <p>تحصیلات</p> 
  //         <p></p>
  //         <label><input type="radio" name="level"  value={'level1'}  defaultChecked={true} />کارشناسی</label>
  //         <p></p>
  //         <label><input type="radio" name="level" value={'level2'}  />کارشناسی ارشد</label>
  //         <p></p>
  //         <label><input type="radio" name="level" value={'level3'} /> دکترا</label>
  //         <p></p>
  //         <hr className='my-6'></hr>
  //         <p></p>

  //         <label className=' w-full'>شماره تماس</label>
  //       <input type='tel' name="phone"  className='rounded-lg border shadow-md gray-700 py-2 px-2 mx-1'/>
  //       <hr className='my-6'></hr>
  //       <p></p>

  //       <label className=' w-full'>ایمیل</label>
  //       <input type='email' name="mail"  className='rounded-lg border shadow-md gray-700 py-2 px-2 mx-1'/>
  //       <hr className='my-6'></hr>
  //       <p></p>

  //       <button type='reset' 
  //       className='border bg-blue-500 rounded-md p-3  hover:bg-white hover:text-blue-500
  //        border-blue-500'>باز نشانی</button>
  //       <button type="submit" 
  //       className='border bg-blue-500 rounded-md p-3  hover:bg-white hover:text-blue-500
  //        border-blue-500'>ذخیره</button>
  //     </form>
  //   );
  // }

export default Sidebar
