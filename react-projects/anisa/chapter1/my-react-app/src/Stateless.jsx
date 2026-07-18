import React, { useState } from 'react'

export default function Stateless({children }) {

    const [users, setUsers] = useState([
        {id:1 , name : 'Soheil'}, 
        {id:2 , name : 'Kasra'}, 
        {id:3 , name : 'Ghazal'}
    ])
    return (
        <div>
            {users.map(user => 
                <div key={user.id}>
                    <h1>{user.name}</h1>
                </div>
            )}
            
        </div>
    )
}
