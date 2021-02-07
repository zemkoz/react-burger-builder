import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
    const attachedClasses = [
        classes.SideDrawer,
        props.open ? classes.Open : classes.Close
        ];

    return (
        <React.Fragment>
            <Backdrop
                clicked={props.closed}
                show={props.open}
                />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </React.Fragment>
    );
};

export default sideDrawer;
