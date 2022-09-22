import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css'

const Navbar = function () {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/Profile">Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/Dialogs">Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/News">News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/Music">Music</NavLink>
      </div >
      <div className={classes.item}>
        <NavLink to="/Settings">Settings</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/Friends">Friends</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
