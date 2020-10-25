import React, { useState, useEffect } from 'react';
import UserService from '../service/userService';

const Profil = ({match}) => {
    const [user, setUser] = useState(null);
    console.log(match)

    useEffect(() => {
        UserService.getUser(+match.params.id).then(user => setUser(user));
    }, [match.params.id])

    return (
        
        <div>
            {
                user ? (<h1>Page de profil de {user.name}</h1>) : ('')
            }
        </div>   
    )
}

export default Profil
