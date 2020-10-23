import React from 'react'

const User = ({details}) => {
    return (
        <tr key={details.id}>
            <td>{details.name}</td>
            <td>{details.firstName}</td>
            <td>{details.email}</td>
            <td>{details.age}</td>
            <td>{details.city}</td>
            <td>{details.department}</td>
        </tr>
    )
}

export default User
