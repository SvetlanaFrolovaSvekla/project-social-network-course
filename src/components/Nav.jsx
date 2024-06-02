import React from "react";
import classes from './Nav.module.css';
console.log(classes);
const Nav = () => { 
    return <nav className={classes.nav}>
        <div className= {`${classes.Item} ${classes.active}`}><a>Profelis</a></div>
        <div className={classes.Item}><a>Message</a></div>
        <div className={classes.Item}><a>News</a></div>
        <div className={classes.Item}><a>Music</a></div>
        <div className={classes.Item}><a>Settings</a></div>
      </nav>

}
export default Nav;