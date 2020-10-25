import React, { useState, useEffect } from 'react';
import UserService from '../service/userService';
import Presentation from '../components/presentation/Presentation'
import Table from '../components/table/Table';
// TODO trier par ordre alphabétqiue un tableau d'objet:
// tableauObjets.sort(function compare(a, b) {
//   if (a.nom < b.nom)
//   return -1;
// if (a.nom > b.nom )
//   return 1;
// return 0;
// });
const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [displayTable, setDisplayTable] = useState("All");

    useEffect(() => {
        const fetchUsers = async () => {
            UserService.getUsers().then(response => setUsers(response))
        };
        fetchUsers();
    }, [])
    
    return (
        <div>
            <Presentation />
            <Table users={users} displayTable={displayTable} handleRating={setDisplayTable} />
        </div>
    )
}

export default UsersList
