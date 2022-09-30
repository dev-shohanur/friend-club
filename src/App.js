import logo from './logo.svg';
import './App.css';
import Activets from './components/Activetis/Activets';
import UserInfo from './components/UserInfo/UserInfo';
import Break_btn from './components/Break_btn/Break_btn';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import TopNave from './components/topNave/TopNave';

function App() {
  const [cart, setCart] = useState(0);
  const handlerAddToTime = (props) => {
    const newTime = props + cart;
    setCart(newTime);
  };
  

  return (
    <div className="App">
      <div className="container">
      <div className="row ">
      <div className="activetis-container col-6 col-md-9">
      <TopNave></TopNave>
        <h2>MD Shohanur Rahman</h2>
        <Activets handlerAddToTime={handlerAddToTime}></Activets>
      </div>
      <div className="user-container col-6 col-md-3">
        <Nav
          totalTime={cart}></Nav>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
