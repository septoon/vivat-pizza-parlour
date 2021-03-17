import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../common/img/logo.png'
import classes from './Header.module.css'
import basket from '../../common/img/basket.png'

const Header = (props) => {
    return (
        <div className={classes.wrapper}>
            <img src={logo} alt="logo" className={classes.logo} />
            <div className={classes.contacts}>
               <div className={classes.cotacts} >
                <span className={classes.contact}>Наш телефон:</span>
                 <a href="tel: +79785068725" className={classes.num}>+7 (978) 506-87-25</a>
                 <NavLink to='/basket' className={classes.link} ><img src={basket} className={classes.bask} alt="shopping-cart" /></NavLink>
               </div>
            </div>
        </div>
    )
}

export default Header
