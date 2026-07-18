import React, { useContext, useState } from 'react'
import UserConytext from '../context/UserContext'

export default function TodoList() {

    const { isLogin } = useContext(UserConytext)
    console.log(isLogin)
    const [items, setItems] = useState([])
    const [todo, setTodo] = useState('')

    function handelSubmit(e) {
        e.preventDefault()
        setItems(todos => [...todos, { title: todo, id: Date.now() }])
        setTodo('')
    }

    
    return (
        <div style={{marginTop:'5rem'}}>
            {isLogin && <div>Todo List

                <form onSubmit={handelSubmit}>
                    <input value={todo} onChange={(e) => setTodo(e.target.value)} />
                    <button type='submit'>Add Task</button>
                </form>
                <ol>
                    {items.map((item, i) => (
                        <div style={{ display: 'flex' }} key={item.id}>
                            <li>{item.title}</li>
                            <span onClick={() => remove(todo.id)} style={{ padding: '0 1rem', color: 'red' }}>x</span>

                        </div>
                    ))}
                </ol></div>}
        </div>
    )
}
