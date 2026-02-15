import './card.css'
import { useNavigate } from 'react-router-dom';

interface Props{
  name:string,
  age:number,
  Status:string,
  id:number
}

function Card({name, age, Status, id}:Props) {
  const navi = useNavigate();
  const viewHandler = () => {    
    navi(`/page2/${id}`);
  }

  
  return(
  <>
    <div className="card">
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Status: {Status}</div>
      <button onClick={viewHandler}>View</button>
    </div>
  </>
  )
}
export default Card