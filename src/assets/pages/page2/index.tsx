import './page2.css';
import { useNavigate, useParams } from 'react-router-dom';

function Page2() {
  // const id = useParams().id;
  const navi = useNavigate();
  // const dataList = data;
  // const detail = dataList.find((el:any) => el.id === Number(id))
  
  const backHandler = () => {
    navi('/');
  }

  return(
  <>
    <div className='page2'>
      <div><button onClick={backHandler}>Back</button></div>
      <div>
        <input>Enter ToDo Name</input>
        <input>Enter Description</input>
        <button>Submit</button>
      </div>
      
      {/* <div>
        <div>ID: {detail?.id}</div>
        <div>Name: {detail?.name} </div>
        <div>Age: {detail?.age}</div>
        <div>Status: {detail?.Status}</div>
        <div>Occupation: {detail?.occupation}</div>
      </div> */}
    </div>
  </>
  )
}

export default Page2