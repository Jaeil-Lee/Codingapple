/* 📌 외부 import */
import "./App.css";
import { useState } from 'react';
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet  } from 'react-router-dom'; //라우터
import axios from 'axios'; // axios 라이브러리
import ButtonMore from './components/ButtonMore';


/* 📌 내부 import */
import data from './data.js' // 확장자는 생략해도 봐줌 ㅇㅇ 
import Card from './components/Card.js'; 
import Detail from './routes/Detail.js';
import About from './components/About.js';
import Event from './components/Event.js';


/* 🟡🟡🟡 */
function App() {

  let[shoes,setShoes] = useState(data)
  let navigate = useNavigate(); // 페이지 이동을 도와주는 useNavigate()함수
  let [count,setCount]  = useState(2); 


  return (
    <div className='App'>
    

      {/* 네이비게이션 BAR */}
      <Navbar bg='white' variant='black'>
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>ICHIBAN</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link onClick={()=>{navigate('/')}}>HOME</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>ABOUT</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/event')}}>EVENT</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>DETAIL</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
      

      {/* 🟢Router - 페이지를 갈아 준다 */}
      <Routes>
        {/* HOME */}
        <Route path="/" element={ 
          <>
            <div className="main-bg"></div>
            <div className="container">
              <div className="row">
                { shoes.map((a, i)=>{
                  return <Card shoes={shoes[i]} i={i} key={1} ></Card>})
                }
              </div>
            </div> 
          </>
        }/> 
        {/* ABOUT */}
        <Route path="/about" element={ <About/> }>
          <Route path='member' element={<div>멤버임</div>}/>
          <Route path='location' element={<div>로케이션임</div>}/>
        </Route>
        {/* EVENT */}
        <Route path='/event' element={ <Event/>} >
          <Route path='one' element={<div> サザンオールスターズのコンサートチケットを!!</div>} />
          <Route path='two' element={ <div>EGO-WRAPPIN'のアルバムがゲット！！</div>} />
        </Route>
        {/* DETAIL */}
        <Route path="/detail" element={ <div>detail site</div> }/>
        <Route path="/detail/:id" element={ <Detail shoes={shoes}  navigate={navigate}/> }/>
        {/* 404 */}
        <Route path='*' element={<div style={{color:'red',fontSize:'400px'}}>없는 페이지</div>} />
      </Routes>


      { /* 🟢정렬버튼 */
      /* <button type="button" class="btn btn-primary" onClick={()=>{
        let copyShoes= [...shoes];
        copyShoes.sort((a,b)=>{
          if (a.title>b.title) {
            return +1
          } else {
            return -1
          }
        })
        setShoes(copyShoes);
      }}>整列</button> */}

      {/* 🟢 더보기 버튼 */}
      {/* <button class="btn btn-primary" onClick={()=>{

        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((d)=>{
          console.log(d.data)
          let shoesCopy = [ ...shoes , ...d.data ];
          setShoes(shoesCopy);
          console.log(shoes);

        })
        .catch(()=>{console.log('가져오기 실패....;;')})

      }}>더보기</button> */}

      {/* {count<4 ? <ButtonMore shoes={shoes} count={shoes} setShoes={setShoes}  setCount={setCount}/> :null} */}


    </div>
  );
}



export default App;
