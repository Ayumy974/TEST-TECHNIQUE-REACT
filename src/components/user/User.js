import React from 'react';
import { useHistory } from "react-router-dom";
import styles from './user.module.css';
import plus from '../../assets/pictos/picto_plus.svg';

const User = ({ details }) => {
    
    const history = useHistory();

    const handleClick = (id) => {
        history.push(`/profil/:${id}`)
    }

    return (
        <tr className={styles.container} style={Number.isInteger(`${details.id}` / 2) ? {backgroundColor: "#f8f6f4"} : {backgroundColor: "#e4e8e6"}  }>
            <td>{details.name}, {details.firstName}</td>
            <td>{details.email}</td>
            <td>{details.age}</td>
            <td>{details.city} ({details.department})</td>
            <td><img onClick={() => handleClick(`${ details.id }`)} src={plus} alt="Pictogramme plus" /></td>
        </tr>
    )
}

export default User
