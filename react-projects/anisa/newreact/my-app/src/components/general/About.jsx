import React, { useContext } from 'react'
import { ThemeContext, UserScore } from '../../App'
import UserContext from '../../context/UserContext'
import IntroMe from './IntroMe'

export default function About() {

    const theme = useContext(ThemeContext)

    const { users, isLoggedIn } = useContext(UserContext)
    console.log(users)

    return (
        <div className='contnet box' style={theme}>
            <h2>About</h2>
            {isLoggedIn ? <p style={{ color: 'green ' }}>{users.name}</p> : ''}
            <hr />
            <h3>Lessons</h3>
            <hr />
            <IntroMe name='Soheil'/>
          

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis distinctio delectus debitis maiores atque consequuntur quidem omnis ab, deserunt cumque mollitia facilis eligendi incidunt possimus! Blanditiis mollitia accusamus necessitatibus temporibus.</p>
        </div>
    )
}
