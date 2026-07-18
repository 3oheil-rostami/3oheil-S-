import { Route, Routes } from 'react-router-dom'
import Detail from './Deteail'
import List from './List'

export default function ArticelRouter() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<List />}/>
            <Route path='/:id' element={<Detail />}/>
        </Routes>
      
    </div>
  )
}
