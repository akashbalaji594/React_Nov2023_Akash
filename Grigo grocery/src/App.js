
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import About from './components/jsfiles/aboutus';
import CartPage from './components/jsfiles/cart';
import ContactUs from './components/jsfiles/contactus';
import Login from './components/jsfiles/login';
import SignUp from './components/jsfiles/registeration';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Link} from "react-router-dom";
import WishlistPage from './components/jsfiles/wishlist';
import { MyContext } from './components/jsfiles/logincontext';
import { useState } from 'react';
function App() {
  const[popUp,setPopup]=useState(false);
  return (
    <div className="App">
  <MyContext.Provider value={{popUp,setPopup}}>
      <Header/>
      {/* <Home/> */}
      <Router>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/Loginpg" element={<Login/>} />
        <Route path="/Registerationpg" element={<SignUp/>} />
        <Route path="/aboutus" element={<About/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/wishlist" element={<WishlistPage/>} />
      </Routes>
    </Router>
      <Footer/>
      </MyContext.Provider>
    </div>
  );
}

export default App;
