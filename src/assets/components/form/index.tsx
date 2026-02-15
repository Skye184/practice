import { useState } from "react";


interface Props{
  submitEvt:(name: string, desc: string)=>void
}

function Form({submitEvt}:Props) {

  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const clickSubmit = () => {
    submitEvt(name, desc);
  }

  return(
  <>
    <div className="addform">
      <div>Add ToDo</div>
      <div><input className="tdname" placeholder="Enter To Do name" onChange={(e: any)=> setName(e.target.value)}></input></div>
      <div><input className="tddesc" placeholder="Enter description" onChange={(e: any)=> setDesc(e.target.value)}></input></div>
      <div><button onClick={clickSubmit}>Submit</button></div>
    </div>
  </>
  )
}
export default Form;