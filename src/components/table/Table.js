import React, { useState } from 'react';
import User from '../user/User';
import styles from './table.module.css';
import greyArrow from '../../assets/pictos/picto_triangle.svg';
import UsersList from '../../pages/UsersList';

const Table = ({ users, handleRating, displayTable }) => {
    const [displaySelect, setDisplaySelect] = useState(false);

    const handleShowCity = () => setDisplaySelect(!displaySelect);

    const usersFiltered = users.filter(user => {
        if (user.city === displayTable) {
            return user.city;
        } else if (displayTable === "All") {
            return users;
        }
    });

    let arr = [];
    const data = usersFiltered.map(user => {
        arr.push(user.name);
        return (<User key={user.id} details={user} />)
    }
    )
    
    return (
        <table className={styles.container}>
            <tbody>
                <tr>
                    <th>Nom <img src={greyArrow} /></th>
                    <th>Email <img src={greyArrow}/></th>
                    <th>Age <img src={greyArrow}/></th>
                    <th>Ville
                        <img onClick={() => handleShowCity()} src={greyArrow} alt="arrow" />
                        {displaySelect && (
                            <ul>
                                <li><a href="#/" onClick={() => handleRating('All')}>Toutes les villes</a></li>
                                <li><a href="#/arcueil" onClick={() => handleRating('Arcueil')}>Arcueil</a></li>
                                <li><a href="#/bourglareine" onClick={() => handleRating('Bourg-la-Reine')}>Bourg-la-Reine</a></li>
                                <li><a href="#/bussysaintgeorges" onClick={() => handleRating('Bussy-Saint-Georges')}>Bussy-Saint-Georges</a></li>
                                <li><a href="#ivrysurseine" onClick={() => handleRating('Ivry-sur-Seine')}>Ivry-sur-Seine</a></li>
                                <li><a href="#/paris" onClick={() => handleRating('Paris')}>Paris</a></li>
                            </ul>
                            )
                        }
                    </th>
                </tr>
                {data}
            </tbody>    
        </table>
    )
}

export default Table
