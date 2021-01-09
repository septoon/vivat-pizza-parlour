import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from'./Navbar.module.css'

const Navbar = props => {
    return(
        <nav className={classes.nav}>
          <div className={classes.item}>
            <NavLink to='/catalog' className={classes.link} >Меню</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/teaCard' className={classes.link} >Чайная карта</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/aboutUs' className={classes.link} >О Нас</NavLink>
          </div>
      </nav>
    )
}

export default Navbar