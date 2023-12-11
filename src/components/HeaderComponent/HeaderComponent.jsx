import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import classes from './styles.module.css';
import { useDispatch } from 'react-redux';
import { addHistory } from '../../redux/slice/historyPath';

const HeaderComponent = () => {

    const dispatch = useDispatch();

    const addMain = () => dispatch(addHistory('Main'));
    const addPost = () => dispatch(addHistory('Post'));
    const addUsers = () => dispatch(addHistory('Users'));

    const location = useLocation();
    const navigate = useNavigate();

    const onBack = () => navigate(location.state?.from, {state: { from: location.pathname } });

    return (
        <nav>
            <ul className={classes.navbar}>
                <li><Link onClick={addMain} state={{ from: location.pathname }} to='/'>Main</Link></li>
                <li><Link onClick={addPost} state={{ from: location.pathname }} to='/posts'>Post</Link></li>
                <li><Link onClick={addUsers} state={{ from: location.pathname }} to='/users'>Users</Link></li>
            </ul>
            <button onClick={onBack}>Back</button>

        </nav>
    );
}

export default HeaderComponent;
