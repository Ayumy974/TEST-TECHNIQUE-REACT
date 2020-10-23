import React from 'react';
import User from '../user/User';
import styles from './table.module.css';
import greyArrow from '../../assets/pictos/picto_triangle.svg'
const Table = ({ users }) => {
    
    const data = users.map(user => (
        <User key={user.id} details={user} />
    ))

    console.log(users)
    
    return (
        <table className={styles.container}>
            <tbody>
                <tr>
                    <th>Nom <img src={greyArrow}/></th>
                    <th>Email <img src={greyArrow}/></th>
                    <th>Age <img src={greyArrow}/></th>
                    <th>Ville <img src={greyArrow}/></th>
                </tr>
                {data}
            </tbody>    
        </table>
    )
}

export default Table
