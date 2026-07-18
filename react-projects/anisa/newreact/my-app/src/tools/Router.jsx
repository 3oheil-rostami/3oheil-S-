import { Route, Routes } from "react-router-dom"
import Login from '../auth/Login'
import About from '../components/general/About'
import Articles from '../components/general//Articles'
import Conact from '../components/general/Contact'
import Detail from '../components/general/Deteail'
import Home from '../components/general/Home'
import Panel from '../users/Panel'
import NotFound from "../components/general/NotFound"
import Test from "../components/tests/Test"
export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/articels' element={<Articles />} />
            <Route path='/articels/:id' element={<Detail />} />
            <Route path='/about' element={<About />} />
            <Route path="/test" element={<Test />} />
            <Route path='/contact' element={<Conact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/panel' element={<Panel />} />
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}
