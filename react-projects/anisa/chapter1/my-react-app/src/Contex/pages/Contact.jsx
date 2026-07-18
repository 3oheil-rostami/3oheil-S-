import React, { useContext, useEffect, useState } from 'react'
import UserConytext from '../context/UserContext'
import axios from 'axios'
import { data, Link } from 'react-router-dom'

export default function Contact() {

  const [state, setState] = useState(false)
  const { esm } = useContext(UserConytext)


  const [posts, setPosts] = useState([])


  useEffect(() => {
    axios('https://dummyjson.com/posts')
      .then(({ data }) => setPosts(data.posts)) // فقط آرایه‌ی posts رو ذخیره می‌کنیم
      .catch(err => console.error(err));
  }, [])

  console.log(posts[0]?.title)

  const timer = function () {
    const job = 'Pro';

    const users = {
      name: 'Soheil',
      job: job
    };

    return users; // شیء رو برگردون
  }

  const result = timer(); // تابع رو صدا بزن
  console.log(result.name); // Soheil
  console.log(result.job);  // Pro


  function printCser(car) {
    console.log(car.name)
    console.log(car.brand)
  }
  const car1 = { name: '207', brand: 'Iran Khodro' }

  printCser(car1)
  const clickHandler = () => {

    setState(w => !w)
    console.log(state)
  }


  return (
    <div>
      <h1>Contact page</h1>
      <h5>welcome {esm}</h5>
      <div>
        <button onClick={clickHandler}>{state ? 'پنهان شدن عکس' : 'نمایش عکس'}</button>
        {state ? <div>
          <img className='img' src="https://sevilmusics.com/wp-content/uploads/2024/03/Masoud-Bakhtiyari-Gole-Nazam.jpg" alt="" />
        </div> : ''}
      </div>


      <div>
        <ul>
          {posts.length > 0 ? (
            posts.map(p => <Link to={`/contact/${p.id}`} key={p.id}>{p.title}</Link>)
          ) : (
           
              <Link>در حال بارگذاری...</Link>
         
          )}
        </ul>
      </div>
    </div>
  )
}
