
import { useParams } from 'react-router-dom';
import {  useNavigate  } from 'react-router-dom'; //라우터

// 카드 컴포넌트
function Card(props){
  let {id} = useParams(); //=> /:url 파라미터 자리에 유저가 입력한 값을 가져올 수 있음 , 변수에 저장해서 사용하자 
  let navigate = useNavigate(); // 페이지 이동을 도와주는 useNavigate()함수

  
  return (
    <div className="col-md-4">
      
      {/* <img src={props.shoes.img} width="80%" onClick={()=>{
        navigate(`/detail/${props.i-1}`)
      }}/> */}
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="80%" />
      {/* <img src={ require('../img/REPLICA_Fragrances/REPLICA'+props.i+'.jpg')} width="60%" style={{borderRadius:'20%',marginTop:'30px'} }/> */}
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price } ¥</p>
    </div>
  )
}
export default Card;