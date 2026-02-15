import type { ToDo } from "../../interfaces/todo.interface";
import './todo.css'

function Todo({name, description, status, id, statusEvt, remEvt}:ToDo) {

const clickStatus = (status: string) => {
 
  if(statusEvt) {
    statusEvt(id, status)
  }
}

const closeHandler = () => {
  if(remEvt) {
    remEvt(id)
  }
}

  return(
  <>
    <div className={`card`}>
      <div className="header">
        <div className={`circle ${status}`}></div>
        <div><button className="xbtn" onClick={closeHandler}>&#10005;</button></div>
      </div>
      <div>Name: {name}</div>
      <div>Description: {description}</div>
      <div>Status: {status}</div>
      <div className="btns">
        <button className="tdbtn" onClick={() => clickStatus("todo")}>ToDo</button>
        <button className="compbtn" onClick={() => clickStatus("complete")}>Completed</button>
        <button className="expbtn" onClick={() => clickStatus("expired")}>Expired</button>
      </div>
    </div>
  </>
  )
}
export default Todo;