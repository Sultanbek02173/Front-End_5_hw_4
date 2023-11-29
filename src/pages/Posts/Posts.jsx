import React, { useState, useEffect } from 'react';
import classes from './style.module.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Posts = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setIsError] = useState("");
    const [posts, setPosts] = useState([]);
    const location = useLocation();

    useEffect(() => {
        setIsLoading(true);

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                setIsError('');
            })
            .catch((err) => {
                setIsError(err.message);
                setPosts([]);
            })
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div className={classes.scrollContainer}>
            <div className={classes.scroll_page}>

            </div>
            {
                posts.length &&
                posts.map((post) => (
                    <div className={classes.cont} key={post.id}>
                        <div className={classes.item}>
                            <h1>{post.id}</h1>
                            <h2>{post.title}</h2>
                            <span>{
                                post.body.length > 20
                                    ? post.body.substr(0, 20).trim() + '...'
                                    : post.body
                            }</span><Link state={{ from: location.pathname }} to={`/posts/${post.id}`}>More...</Link>
                        </div>

                        <div className={classes.item}>
                            <button><Link state={{ from: location.pathname }} to={`/posts/${post.id}`}>detail</Link></button>
                        </div>


                    </div>
                ))
            }

            {isLoading && 'loading...'}
            {error && error}
        </div>
    );
}

export default Posts;
