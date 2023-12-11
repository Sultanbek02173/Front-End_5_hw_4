import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const UsersDetails = () => {
    const params = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setIsError] = useState('');
    const [users, setUsers] = useState(null);
    // console.log(params);

    useEffect(() => {
        setIsLoading(true);

        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setIsError('');
            })
            .catch((err) => {
                setIsError(err.message);
                setUsers(null);
            })
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div>
            {
                users && (
                    <h2>
                        {users.name} {users.email} {users.phone}
                    </h2>
                )
            }
            {isLoading && 'loading...'}
            {error && error}
        </div>
    );
}

export default UsersDetails;
