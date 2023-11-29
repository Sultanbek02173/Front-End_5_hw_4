import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setIsError] = useState("");
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setIsError('');
            })
            .catch((err) => {
                setIsError(err.message);
                setUsers([]);
            })
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div>
            {
                users.length &&
                users.map((user) => (
                    <div key={user.id}>
                        {user.name} {user.email} <button onClick={() => navigate(`/users/${user.id}`)}>Learn more</button>
                    </div>
                ))
            }

            {isLoading && 'loading...'}
            {error && error}
        </div>
    );
}

export default Users;
