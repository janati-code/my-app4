import React, { useEffect, useState } from 'react'
import CardItem from '../features/cardlist/CardItem';
import SearchBox from '../features/cardlist/SearchBox';

const Cardlist = () => {
    const [users,setusers] = useState([]);
    const [newUsers,setNewusers] = useState([]);

    useEffect(() =>
        {
            const fetchData= async()  => {
                const res=await fetch("https://jsonplaceholder.typicode.com/users");
                const data=await res.json();
                setusers(data);
                setNewusers(data);
            };

            fetchData();
        },[]);
       

        const getfilteredUsers=(param)=>
        {
            const temp= users.filter((user) =>
            {
                return user.name.includes(param);
            });
            
            setNewusers(temp);
            
        };

  return (
   <>
   <main className="p-10">
   <SearchBox method={getfilteredUsers}/>
   <section className='grid mt-16 grid-cols-3 gap-12 p-4 bg-transparent'> 
        {
            newUsers.map((user) => {
                return <CardItem key={user.id} data={user} />;
            })

        }
        </section>
   </main>
   </>
  )

}
export default Cardlist