import React from 'react'
import './menu.css'
import { FaFacebookF } from 'react-icons/fa'; 
import { AiOutlineTwitter } from 'react-icons/ai'; 
import { AiFillLinkedin } from 'react-icons/ai'; 


const Menu = () =>{
    return(
        <div className = "menu">
                <div className = "menu-wraper">
              <div className = "menu-wraper-first-item">
                  <div style = {{'animation-name': 'short-line'}} className = "menu-wraper-first-item-lines-group">
                  <div className = "menu-wraper-first-item-lines-group-item line-hovre"></div>
                  <div className = "menu-wraper-first-item-lines-group-item"></div>
                  </div>
                  <div className = "menu-wraper-first-item-name"><p>MENU</p></div>
            </div>  
              <div className = "menu-wraper-second-item">
<div className = "menu-wraper-second-item-name">
  <p>Login</p>
</div>
              </div>
              <div className = "menu-wraper-third-item">
                <ul className = "menu-wraper-third-item-list">
                  <li><FaFacebookF/></li>
                  <li><AiOutlineTwitter/></li>
                  <li><AiFillLinkedin/></li>
                </ul>
              </div>
            </div>
        </div>
    )
}

export default Menu