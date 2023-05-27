import { Outlet } from 'react-router-dom';


function Event() {
  return (
  <div>
    <h1 style={{marginTop:'200px'}}>本日のイベント</h1>
    <Outlet></Outlet> 
    </div>  
  )
}

export default Event;