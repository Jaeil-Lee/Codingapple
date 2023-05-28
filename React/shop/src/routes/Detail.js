import { useParams } from 'react-router-dom';
import "../App.css";

function Detail(props) {

  let {id} = useParams();
  let 찾은상품 = props.shoes.find(function(e){
    return e.id == id;
  });
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6">
        {/* <img src={'https://codingapple1.github.io/shop/shoes'+id+'.jpg'} width="100%" /> */}
        <img src={`https://codingapple1.github.io/shop/shoes${Number(id-1)}.jpg`} width="100%" />




        {/* <img  src={require('../img/REPLICA_Fragrances/REPLICA1.jpg')} width="100%" style={{borderRadius:'20%',marginTop:'30px'}} />
        <img  src={require('../img/REPLICA_Fragrances/11.jpg')} width="100%" style={{borderRadius:'20%',marginTop:'30px'}} />
        <img  src={require('../img/REPLICA_Fragrances/12.jpg')} width="100%" style={{borderRadius:'20%',marginTop:'30px'}} />
        <img  src={require('../img/REPLICA_Fragrances/13.jpg')} width="100%" style={{borderRadius:'20%',marginTop:'30px'}} /> */}
      </div>
     
      <div className="col-md-6 mt-4">
      <h4 className="pt-5">{찾은상품.title}</h4>
      <p>{찾은상품.content}</p>
      <p>{찾은상품.price}원</p>
      <button className="btn btn-danger">주문하기</button>
    </div>
      {/* <div className="col-md-6">
        <h4 className="pt-5">レプリカウィスパーインザライブラリオードトワレット</h4>
        <p>ALL FRAGRANCES</p>
        <p>120000¥</p>
        <button className="btn btn-danger">注文</button> 
      </div> */}
    
    </div>
  </div> 
  )
}  


export default Detail;