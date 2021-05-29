import React from 'react'
import './footer.css'

const Footer = () =>{
    return(
        <div className = "footer">
            <div className = "footer-wraper">
                <div className = "footer-wraper-logo">
                    <span>A competition by</span>
                    <img src = "https://www.2030climatechallenge.org/img/logo-lever-for-change.png"/>
                </div>
                <div className = "footer-wraper-info"> 
                    <div className = "footer-wraper-info-a">
                    <a>Privacy Policy</a>
                    <a>Terms & Conditions</a>
                    <a>Contact</a>
                    </div>
                    <div>
                        <p>Challenge designed by <a href = "https://www.thecommonpool.org">Common Pool;</a> powered by  <a href = "https://www.rampit.com">Rampit</a>. © 2020. All rights reserved.</p>
                    </div>
                </div>
                <div className = "footer-wraper-button">
                    <button>Accessibility Help</button>
                </div>
            </div>
        </div>
    )
}

export default Footer