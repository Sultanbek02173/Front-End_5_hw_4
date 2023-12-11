import React, { useEffect } from 'react';
import classes from './style.module.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts, setLoading, setError } from '../../redux/slice/postSlice';

const Posts = () => {

    const dispatch = useDispatch();
    const { posts, isLoading, errorPosts } = useSelector((state) => state.posts)
    const location = useLocation();

    useEffect(() => {
        setLoading(true);

        fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
            return res.json();
        }).then((data) => {
            dispatch(setPosts(data));
        }).catch((err) => {
            dispatch(setError(err.message));
        });
    }, [dispatch]);

    return (
        <div className={classes.scrollContainer}>
            <div className={classes.scroll_page}>

            </div>
            {errorPosts && <div>{errorPosts}</div>}
            {isLoading && <div>Loading...</div>}
            {posts.length &&
                posts.map((el) => (
                    <div className={classes.cont} key={el.id}>
                        <div className={classes.item}>
                            <h1>{el.id}</h1>
                            <h2>{el.title}</h2>
                            <span>
                                {
                                    el.body.length > 20
                                        ? el.body.substr(0, 20).trim() + '...'
                                        : el.body
                                }
                            </span><Link state={{ from: location.pathname }} to={`/posts/${el.id}`}>More...</Link>
                        </div>
                        <div className={classes.item}>
                            <button><Link state={{ from: location.pathname }} to={`/posts/${el.id}`}>detail</Link></button>
                        </div>

                    </div>
                ))}
        </div>
    );
}

export default Posts;
