import { useState } from 'react';
import "./App.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import data from './data.js' // 확장자는 생략해도 봐줌 ㅇㅇ 


function App() {

  let[shoes] = useState(data)
 
  return (
    <div className='App'>
    

      {/* 네이비게이션 BAR */}
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>isseymiyake</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 상품정보 */}
      <div className="container">
          <div className="row">
            {
              shoes.map((e,i)=>{
                return(
                <Card shoes={e} i={i+1} ></Card>
                )
              })
            }
     
        
          </div>
      </div>
    </div>
  );
}

// 카드 컴포넌트
function Card(props){
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price }</p>
    </div>
  )
}

export default App;
