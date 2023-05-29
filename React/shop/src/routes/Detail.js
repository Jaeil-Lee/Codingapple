import { useParams } from 'react-router-dom';
// import styled from 'styled-components';
import "../App.css";
import { useEffect, useState } from 'react';
import {  Nav } from "react-bootstrap";

function Detail(props) {

  /* URL 파라미터 문법  */
  let {id} = useParams(); //=> /:url 파라미터 자리에 유저가 입력한 값을 가져올 수 있음 , 변수에 저장해서 사용하자 
  let 찾은상품 = props.shoes.find(function(e){ return e.id == id;});
  // let [count,setCount] = useState(0);
  // let [flag,setFlag] = useState(false);
  let [num, setNum] = useState('')
  let [탭,탭변경] = useState(1);
  let [fade2,setFade2] = useState('');

  // side effect 같은 느낌으로~
  // useEffect(()=>{
  //   // let a = setTimeout(()=>{setFlag(false)},2000)
  //   // console.log('useEffect 안의 내용 출력')

  //   // return() => {
  //   //   // console.log('return 안의 내용 출력')
      
  //   //   clearTimeout(a)
  //   // }
  //   if (isNaN(num) == true){
  //     alert('그러지마세요')
  //   }
  // },[num])
    useEffect(()=>{
      setFade2('end')
      return ()=>{
        setFade2('')
      }
    },[])
  return (
    <>
      {/* <input onChange={(e)=>{setNum(e.target.value)}} /> */}
      
      <div className={'container start '+fade2}>
        {/* {
          flag==true?<div className="alert alert-warning">2초 후에 사라짐!</div>:null
        }

        {count}
        <button onClick={()=>{setCount(count+1)}}>button</button> */}
      <div className="alert alert-warning">2초 후에 사라짐!</div>
        <div div className="row">
            <div className="col-md-6">
                <img src={`https://codingapple1.github.io/shop/shoes${Number(id)+1}.jpg`} width="100%" />
            </div>
          

            <div className="col-md-6 mt-4">
                <h4 className="pt-5">{찾은상품.title}</h4>
                <p>{찾은상품.content}</p>
                <p>{찾은상품.price}¥</p>
                <button className="btn btn-danger">주문하기</button>
            </div>
          {/* <div className="col-md-6">
            <h4 className="pt-5">レプリカウィスパーインザライブラリオードトワレット</h4>
            <p>ALL FRAGRANCES</p>
            <p>120000¥</p>
            <button className="btn btn-danger">注文</button> 
          </div> */}
      
        </div>
        
      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={()=>{탭변경(0)}}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={()=>{탭변경(1)}}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={()=>{탭변경(2)}}>버튼2</Nav.Link>
        </Nav.Item>
     </Nav>
     
        <TabContent 탭={탭}/>
     
      </div> 
    </>
  )
}  

function TabContent({탭}){

  let [fade,setFade] = useState('');

  /* 2번째로 실행 */
  useEffect(()=>{
    setTimeout(()=>{ setFade('end') },100) // automatic batching을 막기위해 시간간격 설정

    /* 1번째로 실행 */
    return ()=>{
      setFade('')
    }

  },[탭])
  

  return (        /* 이렇게 class 붙이려면 css처럼 똑같이 한 칸 띄우고 붙이자 */
    <div className={'start '+fade} >
      { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭] }
    </div>
  )
}

export default Detail;