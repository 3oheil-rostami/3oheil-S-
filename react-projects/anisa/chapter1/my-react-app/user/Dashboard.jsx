import React, { useContext } from 'react'
import UserConytext from '../src/Contex/context/UserContext'
import { ThemContex } from '../src/Contex/App'

export default function Dashboard() {

    const them = useContext(ThemContex)
    const { user, isLogin } = useContext(UserConytext)

    return (
        <>
            {true && <div style={them}>
                <h2>Dashbord</h2>
                <p>Name : {user.name}</p>
            </div>}
        </>
    )
}
