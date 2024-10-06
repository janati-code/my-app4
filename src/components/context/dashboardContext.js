import { createContext, useState } from "react";

export const DashboardContext = createContext(null);
export const DashboardContextProvider = (props) => {
    const [list, setList] = useState([]);


    const addtoList = (item) => {
         setList([...list, item]);

    }

    const deletefromList = (itemId) => {

        
        let newlist=[];
        list.map((i)=>{
            if (itemId!==i.rowId) newlist.push(i) ; 
           
         })

         setList(newlist);
   }

   const fillfromList = (itemId) => {
            
      }

    const contextValue = { list, setList, addtoList ,deletefromList,fillfromList};

    return <DashboardContext.Provider value={contextValue}>{props.children}</DashboardContext.Provider>
}