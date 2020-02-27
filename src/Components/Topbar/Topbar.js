import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Topbar.module.css';

const Topbar = () => {
    return(
        <div className={classes.Topbar}>
            <Link to='/' className={classes.MenuItem}>Home</Link>
            <Link to='#' className={classes.MenuItem}>Contact</Link>
            <Link to='#' className={classes.MenuItem}>About</Link>
        </div>
    );
}

export default Topbar;