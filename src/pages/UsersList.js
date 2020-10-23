import React, { useState, useEffect } from 'react';
import UserService from '../service/userService';
import Presentation from '../components/presentation/Presentation'
import Table from '../components/table/Table';

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            UserService.getUsers().then(response => setUsers(response))
        };
        fetchUsers();
    }, [])
    
    console.log(users)
    return (
        <div>
            <Presentation />
            <Table users={users} />
        </div>
    )
}

export default UsersList
