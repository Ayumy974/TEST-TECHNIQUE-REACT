import React from 'react';
import User from '../user/User';

const Table = ({users}) => {
    const data = users.map(user => (
        <User details={user} />
    ))
    console.log(users)
    
    return (
        <table>
            <tbody>
                {data}
            </tbody>    
        </table>
    )
}

export default Table
