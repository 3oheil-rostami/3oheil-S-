import {React , useState} from "react"
function Count({number}) {
    const [num, setNum] = useState(number)
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{num}</h1>
            <button onClick={() => setNum(num + 1)}>increase</button>
            <button onClick={() => setNum(num - 1)}>decrease</button>
        </div>
    )
}


export default Count