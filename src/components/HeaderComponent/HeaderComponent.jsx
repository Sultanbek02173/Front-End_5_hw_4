import React from 'react';
import { Link } from 'react-router-dom';
import classes from './styles.module.css';

const HeaderComponent = () => {
    return (
        <nav>
            <ul className={classes.navbar}>
                <li><Link to='/'>Main</Link></li>
                <li><Link to='/posts'>Post</Link></li>
                <li><Link to='/users'>Users</Link></li>
            </ul>
            <button>Back</button>

        </nav>
    );
}

export default HeaderComponent;
