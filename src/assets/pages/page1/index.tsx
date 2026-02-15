import Todo from '../../components/todo';
import type { ToDo } from '../../interfaces/todo.interface';
import './page1.css';
import { useState} from 'react';
import Form from '../../components/form';

function Page1() {

  const [view, setView] = useState("listView");
  const [toDoList, settoDoList] = useState<any>([]);
  

  const ima = (name:string, desc: string) => {
    const newItem:ToDo = {name, description: desc, status: "todo", id: toDoList.length +1}
   settoDoList( [...toDoList, newItem]);
    setView("listView");
  };

  const updateStatus = (id: number, status: string) => {
    const newItems = toDoList.map((el: any) => {
       if(id === el.id) {
          return {...el, status}
       }
       return el
    })
    settoDoList(newItems)
  }

  const del = (id:number) => {
    const newArr = toDoList.filter((el:any) =>  el.id !== id)
    settoDoList(newArr)
  }

  return(
    <>
    <div className='page1'>
       {view === "listView" ? 
        (
        <>
          <div className='add-container'><button onClick={() => setView("form")}>Add new todo</button></div>
          <div className='todo-container'>
            {toDoList.map((el: ToDo, index:number) => 
            <Todo key={index} name={el.name} description={el.description} status={el.status} id={el.id} statusEvt={updateStatus} remEvt={del}/>)}
          </div>
        </>
       ) : 
        (<Form submitEvt={ima} />)
      }
    </div>
     
    </>
  )
}
export default Page1