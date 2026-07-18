import React, { useState } from 'react'

export default function CustomHooks() {
    function useFunc () {
        const [value , setValue] = useState('')

        return {
            value,
            onChange: (e) => setValue(e.target.value)
        }
    }
    // const [username, setUsername] = useState('')
    const username = useFunc()
    const password = useFunc()
    console.log(username )
    // const [password , setPassword] = useState('')
    return (
        <div>
            <input type="text" value={username} name='username'
               {...username}
            />
            <input type="text" name="password" value={password}
                {...password}
            />
            
        </div>
    )
}
