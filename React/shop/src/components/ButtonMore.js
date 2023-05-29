import axios from 'axios'; // axios 라이브러리


function ButtonMore(props) {
  return(

    <button class="btn btn-primary" onClick={()=>{
      console.log(props.count);
      axios.get('https://codingapple1.github.io/shop/data'+props.count+'.json')  
      
      .then((d)=>{
        console.log(d.data)
        let shoesCopy = [ ...props.shoes , ...d.data ];
        props.setShoes(shoesCopy);
        console.log(props.shoes);
        if (props.count<=3) {
          props.setCount(props.count+1);
        }
          
        })
        .catch(()=>{
          if (props.count>3) {
            alert('3번 초과');
          } else {
          console.log('가져오기 실패....;;')
          }
        })

    }}>더보기</button>

  )
}

export default ButtonMore;