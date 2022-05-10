import React, { useEffect,useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import nftContext from '../context/nftContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  Navigate,
} from "react-router-dom";

const Navbar = () => {
  const [Class, setClass] = useState("")
  const navigate = useNavigate()
  const context = useContext(nftContext);
  const {user, getUserDetails}= context;
  let disabled = false;
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login")
  };
  const location = useLocation();
  

  if(localStorage.getItem("token")===null){
    disabled = true;
  }
  const handleClick=()=>{
    navigate("/setting")
  }
  let userName;
  if(user.name){
    userName = user.name.slice(0,8)
  }
  return (
    <>
      <nav id="nav" className="sticky-top">
        <ul >
          <li><Link id="logoText" className={`navItem ${disabled?"disable-link":""}`} to="/">
            {/* <img style={{width:"48px"}} src="./gun.png" alt="Preview - White Gun Icon Png@nicepng.com"/> */}
            Core Gun</Link></li>
          <li>
            <Link className={`navItem ${location.pathname === "/" ? "Active" : ""} ${disabled?"disable-link":""}`}
                  aria-current="page" to="/">
                Home
            </Link>
          </li>
          <li>
            <Link
              className={`navItem ${
                location.pathname === "/about" ? "Active" : ""}
                ${disabled?"disable-link":""}`}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
              <Link
                className={`navItem ${
                  location.pathname === "/market" ? "Active" : ""}
                  ${disabled?"disable-link":""}`}
                to="/market"
              >
                Buy NFT
              </Link>
          </li>
          <li>
              <Link
              className={`navItem
                ${location.pathname === "/cart" ? "Active" : ""}
                ${disabled?"disable-link":""}`}
                to="/cart"
              >
              <i className={`fas fa-shopping-cart ${
                  location.pathname === "/cart" ? "Active" : ""}`}></i>
              </Link>            
          </li>    
          <li >
            <Link
              className={`profile navItem ${
                location.pathname === "/profile" ? "Active" : ""}
                ${disabled?"disable-link":""}`}
              to="/profile"
            >
              {userName}
            </Link>
              <div className={`dropdown ${disabled?"disable-link":""}`} tabIndex="1">
                <img className="userImg" src={user.img} alt="@User"/>             
                <div className={`dropdown-content ${Class}`}>
                  <p onClick={handleClick}>Settings</p>
                  <p style={{borderTop:"1px solid white"}} onClick={logout}>Logout</p>
                </div>
              </div>
          </li>          
        </ul>
      </nav>
    </>
  );
};

export default Navbar;



