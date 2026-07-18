import React, { useContext } from 'react'
import { ThemeContext, UserScore } from '../../App'
import UserContext from '../../context/UserContext'

export default function Home() {

  const lessons = useContext(UserScore)
  const theme = useContext(ThemeContext)


  const {users , isLoggedIn , students} = useContext(UserContext)
  console.log(students)
  // console.log(users)
  // console.log(lessons)

  return (
    <div className='contnet box' style={theme}>
      <h2>Home</h2>
      {isLoggedIn ? <p style={{color:'green '}}>{users.name}</p> : ''}
      <hr />
      <h3>Lessons</h3>
      {lessons.map((less) => (
        <div key={less.id}>
          <h4>{less.name} : {less.score}</h4>
        </div>
      ))}
      <hr />
      {students.map((item) => (
        <div key={item.id}>
          <li>
            {item.name}
          </li>
        </div>
      ))}
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis distinctio delectus debitis maiores atque consequuntur quidem omnis ab, deserunt cumque mollitia facilis eligendi incidunt possimus! Blanditiis mollitia accusamus necessitatibus temporibus.</p>
    </div>
  )
}
