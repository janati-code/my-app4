
import React, { useContext } from 'react'
import { DashboardContext } from '../../components/context/dashboardContext';
import { v4 as uuidv4 } from 'uuid';


const Sidebar = () => {
  const { addtoList } = useContext(DashboardContext);
  



    function handleSubmit(e) {
      // Prevent the browser from reloading the page
      e.preventDefault();
  
      // Read the form data
      const form = e.target;
      const formData = new FormData(form);

       //  you can work with it as a plain object:
      const formJson = Object.fromEntries(formData.entries());
      addtoList(formJson);
  
      // or You can pass formData as a fetch body directly:
      // fetch('/some-api', { method: form.method, body: formData });
  
     
    }
  
    return (
      <form  className='py-16 px-10 grid grid-cols-2 text-gray-900 justify-center gap-4 
      w-full align-baseline'
        onSubmit={handleSubmit}>
          <input  type='hidden' name='rowId' defaultValue={uuidv4()}></input> 
        <label className=' ' >نام </label>
        <input type='text' name="name" className='rounded-lg border  shadow-md gray-700  py-2 px-2 mx-1'/>
          <label className=' w-full'>نام خانوادگی</label>
        <input type='text' name="lname" className='rounded-lg border shadow-md gray-700 py-2 px-2 mx-1'/>
       
       <hr className='my-6'></hr>
       <p></p>
     
          <p>تحصیلات</p> 
          <p></p>
          <label><input type="radio" name="level"  value="کارشناسی"  defaultChecked={true} />کارشناسی</label>
          <p></p>
          <label><input type="radio" name="level" value="کارشناسی ارشد"  />کارشناسی ارشد</label>
          <p></p>
          <label><input type="radio" name="level" value="دکترا" /> دکترا</label>
          <p></p>
          <hr className='my-6'></hr>
          <p></p>

          <label className=' w-full'>شماره تماس</label>
        <input type='tel' name="phone" className='rounded-lg border shadow-md gray-700 py-2 px-2 mx-1'/>
        <hr className='my-6'></hr>
        <p></p>

        <label className=' w-full'>ایمیل</label>
        <input type='email' name="mail" className='rounded-lg border shadow-md gray-700 py-2 px-2 mx-1'/>
        <hr className='my-6'></hr>
        <p></p>

        <button type="reset" 
        className='border bg-blue-500 rounded-md p-3  hover:bg-white hover:text-blue-500
         border-blue-500'>باز نشانی</button>
        <button type="submit" 
        className='border bg-blue-500 rounded-md p-3  hover:bg-white hover:text-blue-500
         border-blue-500'>ذخیره</button>
      </form>
    );
  }

export default Sidebar
