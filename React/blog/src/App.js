/* eslint-disable */
import { useState } from "react";
import "./App.css";

function App() {
  /* 변수 - return 밖에 선언 */
  let post = "서면 우동 맛집 ";

  /* useState */
  let [글제목, 글제목변경] = useState(["남자 코트 추천","강남 우동맛집","파이썬독학",]);
  let [따봉, 따봉변경] = useState([0,0,0]); // 굳이 함수까지 2개 작성하지 않아도 된다
  let [modal,setModal] = useState(false) // ( ) 안에 들어가는 형식은 뭐든 상관 없다
  let [click,setclick] = useState(false) 

  /* 함수 */

  /* 1. HTML  레이아웃 짤 때는 이렇게 return () 안에 다 짜야한다 */
  /* 2. return 안에는 하나의 태그로 시작해서 하나의 태그로 끝나야 한다, 병렬로 태그 2개 이상 금지 */
  return (
    <div className='App'>


      {/* 블로그 제목 */}
      <div className='black-nav'>
        <h4>블로그임</h4>
      </div>


      {/* 버튼 */}
      <button onClick={() => {
          let copyTitle = [...글제목];
          copyTitle[0] = "여자 코트 추천";
          글제목변경(copyTitle);
      }}>글수정</button>

      <button style={{marginLeft:'20px'}} onClick={() => {
          let copyTitleSort = [...글제목];
          copyTitleSort.sort();
          글제목변경(copyTitleSort);
      }}>정렬</button>

      {/* list 3개 */}
      {/* <div className='list'> 
        <h4>{글제목[0]} <span onClick={() => { 따봉변경(따봉 + 1); }} > 👍 </span> {따봉} </h4> 
        <p>5월 21일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>5월 21일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{ setModal(!modal)}}>{글제목[2]}</h4>
        <p>5월 21일 발행</p>
      </div> */}

      {
        글제목.map((e,i)=>{
          return(
          <div className='list' key={i}>
            {/* <h4 onClick={()=>{ setModal(!modal)}}>{글제목[2]}</h4> */}
            {/* <h4 onClick={()=>{ setModal(!modal)}}>{e}</h4> */}
            <h4 onClick={()=>{ setModal(!modal)}}>{글제목[i]} 
             <span onClick={(e) => { 
              
              let copy = [...따봉];
              copy[i]+1;
              따봉변경(copy);
              
                e.stopPropagation();}} 
             > 👍 </span> {따봉[i]} 
            </h4>
            <p>5월 21일 발행</p>
          </div>
          )
        })
      }

      {/* 모달창 */}
      {
        modal==true ? <Modal/> : null
      }
      

    </div> /* 메인 div 終 */
  );
}

/* 모달 */
function Modal() {
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}


export default App;
