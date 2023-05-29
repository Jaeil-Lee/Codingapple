import { useParams } from 'react-router-dom';
// import styled from 'styled-components';
import "../App.css";
import { useEffect, useState } from 'react';
function Detail(props) {

  /* URL 파라미터 문법  */
  let {id} = useParams(); //=> /:url 파라미터 자리에 유저가 입력한 값을 가져올 수 있음 , 변수에 저장해서 사용하자 
  let 찾은상품 = props.shoes.find(function(e){ return e.id == id;});
  let [count,setCount] = useState(0);
  let [flag,setFlag] = useState(false);
  let [num, setNum] = useState('')


  // side effect 같은 느낌으로~
  useEffect(()=>{
    // let a = setTimeout(()=>{setFlag(false)},2000)
    // console.log('useEffect 안의 내용 출력')

    // return() => {
    //   // console.log('return 안의 내용 출력')
      
    //   clearTimeout(a)
    // }
    if (isNaN(num) == true){
      alert('그러지마세요')
    }
  },[num])
  
  return (
    <>
    <input onChange={(e)=>{setNum(e.target.value)}} />
    
    <div className="container">
      {
        flag==true?<div className="alert alert-warning">2초 후에 사라짐!</div>:null
      }

    {count}
    <button onClick={()=>{setCount(count+1)}}>button</button>

    <div className="row">
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
  </div> </>
  )
}  


export default Detail;