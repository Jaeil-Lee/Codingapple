import { Outlet } from 'react-router-dom';

function About(){
  return (
    <div>
      <h4>about페이지임</h4>
      
      {/* 구멍이라는 뜻 , nested된 라우터의 element요소를 어디에 보여줄지 지정함 */}
      <Outlet></Outlet> 
    </div>
  )
}

export default About;