import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from'./Navbar.module.css'

const Navbar = props => {
    return(
        <nav className={classes.nav}>
          <div className={classes.item}>
            <NavLink to='/catalog' activeClassName={classes.active}>Меню</NavLink>
          </div>
          <div className={`${classes.item} ${classes.active}`}>
            <NavLink to='/teaCard' activeClassName={classes.active}>Чайная карта</NavLink>
          </div>
          <div className={`${classes.item} ${classes.active}`}>
            <NavLink to='/aboutUs' activeClassName={classes.active}>О Нас</NavLink>
          </div>
      </nav>
    )
}

export default Navbar