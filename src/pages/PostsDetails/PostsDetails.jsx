import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import classes from './postDetail.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setPosts, setError } from '../../redux/slice/postDetailSlice';

const PostsDetails = () => {

    const dispatch = useDispatch();
    const { postsDetail, isLoadingDetail, errorPostDetail } = useSelector((state) => state.postsDetail)

    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {

        setLoading(true);

        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then((res) => {
            return res.json();
        }).then((data) => {
            dispatch(setPosts(data));
        }).catch((err) => {
            dispatch(setError(err.message));
        });

    }, [dispatch, params]);

    const onBack = () => navigate(location.state?.from, { state: { from: location.pathname } });

    return (
        <div className={classes.container}>
            <button onClick={onBack}>Back</button>

            {errorPostDetail && <div>{errorPostDetail}</div>}
            {isLoadingDetail && <div>Loading...</div>}
            {postsDetail && (
                <div>
                    <h1>{postsDetail.id}</h1>
                    <h2>{postsDetail.title}</h2>
                    <p>{postsDetail.body}</p>
                </div>
            )}

        </div>
    );
}

export default PostsDetails;
