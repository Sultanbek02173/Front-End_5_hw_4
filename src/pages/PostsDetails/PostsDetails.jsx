import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import classes from './postDetail.module.css';

const PostsDetails = () => {

    const params = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setIsError] = useState('');
    const [posts, setPosts] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setIsLoading(true);

        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                setIsError('');
            })
            .catch((err) => {
                setIsError(err.message);
                setPosts(null);
            })
            .finally(() => setIsLoading(false));
    }, []);

    const onBack = () => navigate(location.state?.from, { state: { from: location.pathname } });


    return (
        <div className={classes.container}>
            <button onClick={onBack}>Back</button>
            {
                posts && (
                    <div>
                        <h1>{posts.id}</h1>
                        <h2>{posts.title}</h2>
                        <p>{posts.body}</p>
                    </div>
                )
            }
            {isLoading && 'loading...'}
            {error && error}
        </div>
    );
}

export default PostsDetails;
