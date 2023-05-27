

// 카드 컴포넌트
function Card(props){
  return (
    <div className="col-md-4">
      
      <img src={props.shoes.img} width="80%" />
      {/* <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" /> */}
      {/* <img src={ require('../img/REPLICA_Fragrances/REPLICA'+props.i+'.jpg')} width="60%" style={{borderRadius:'20%',marginTop:'30px'} }/> */}
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price } ¥</p>
    </div>
  )
}
export default Card;