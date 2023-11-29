import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import classes from './styles.module.css';

const HeaderComponent = () => {

    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);

    const onBack = () => navigate(location.state?.from, {state: { from: location.pathname } });

    return (
        <nav>
            <ul className={classes.navbar}>
                <li><Link state={{ from: location.pathname }} to='/'>Main</Link></li>
                <li><Link state={{ from: location.pathname }} to='/posts'>Post</Link></li>
                <li><Link state={{ from: location.pathname }} to='/users'>Users</Link></li>
            </ul>
            <button onClick={onBack}>Back</button>

        </nav>
    );
}

export default HeaderComponent;
