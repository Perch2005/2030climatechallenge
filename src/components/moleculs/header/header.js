import React from 'react'
import './header'
import Logo from '../../atoms/logo'
const Header = () => {
    return(
        <div className = "header">
            <div className = "header-wraper">
          <Logo/>
            </div>
        </div>
    )
}

export default Header