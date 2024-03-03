import React, { useState } from 'react';

const UserSearchForm = ({ onSearch }) => {

    const [ username, setUsername ] = useState('');

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };
        const handleSubmit = (e) => { e.preventDefault();
            onSearch(username);
        };
       return (
        <form onSubmit={handleSubmit}>
            <label>GitHub Username:
                <input type="text" value={username} onChange={handleInputChange}/>
                </label>
                <button type='submit'>Search</button>
        </form>
        )
}

export default UserSearchForm;