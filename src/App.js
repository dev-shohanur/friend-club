import logo from './logo.svg';
import './App.css';
import Activets from './components/Activetis/Activets';
import UserInfo from './components/UserInfo/UserInfo';
import Break_btn from './components/Break_btn/Break_btn';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import TopNave from './components/topNave/TopNave';
import Blog from './components/Blog/Blog';

function App() {
  const [cart, setCart] = useState(0);
  const handlerAddToTime = (props) => {
    const newTime = props + cart;
    setCart(newTime);
  };
  

  return (
    <div className="App">
      <div className="row ">
      <div className="activetis-container col-6 col-md-9">
          <div className="container">
            <TopNave></TopNave>
            <Activets handlerAddToTime={handlerAddToTime}></Activets>
            <Blog></Blog>
      </div>
      </div>
      <div className="user-container col-6 col-md-3">
        <Nav
          totalTime={cart}></Nav>
      </div>
      </div>
    </div>
  );
}

export default App;
