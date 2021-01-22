import React from 'react'
import logo from '../../common/img/logo.png'
import classes from './Header.module.css'

const Header = (props) => {
    return (
        <div className={classes.wrapper}>
            <img src={logo} alt="logo" className={classes.logo} />
            <div className={classes.contacts}>
               <div className={classes.cotacts} >
                <span className={classes.contact}>Наш телефон:</span>
                 <a href="tel: +79785068725" className={classes.num}>+7 (978) 506-87-25</a>
               </div>
            </div>
        </div>
    )
}

export default Header
