import React from "react";
import { NavLink } from "react-router-dom";
import classes from'./Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" className={({ isActive }) => isActive ? `${classes.activeLink}` : `${classes.item}`}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" className={({ isActive }) => isActive ? `${classes.activeLink}` : `${classes.item}`}>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" className={({ isActive }) => isActive ? `${classes.activeLink}` : `${classes.item}`}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" className={({ isActive }) => isActive ? `${classes.activeLink}` : `${classes.item}`}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" className={({ isActive }) => isActive ? `${classes.activeLink}` : `${classes.item}`}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
