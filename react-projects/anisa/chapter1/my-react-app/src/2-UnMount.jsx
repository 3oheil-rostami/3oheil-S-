import { useEffect, useState , useRef } from "react"
export default function UnMount() {

    const [name, setName] = useState('Dark')
    const [num, setNum] = useState(60)
    const [use, setUse] = useState('')
    useEffect(() => {
        setInterval(() =>
            setNum(pre => pre - 1)
            , 1000)
    }, [])
    const clickHandler = () => {
        if (name == 'Dark') {
            setName('White')
            document.body.style.backgroundColor = 'black'
            document.body.style.color = 'white'
            document.body.style.transition = 'background-color 0.5s'
            // document.body.style.transition = 'opacity 0.5s'  


            // setNum(60)

        } else {
            setName('Dark')
            document.body.style.backgroundColor = 'white'
            document.body.style.color = 'black'
            document.body.style.transition = 'background-color 0.5s'

            // setNum(60)

        }
    }
    // console.log(num)
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users/1')
    //         .then(res => res.json())
    //         .then(data => setUse(data.name))
    //     setUse()
    // }, [])
    // const firtname = prompt('Whats your user name ?')
    // useEffect(() => {
    //     const firtname = prompt('Whats your user name ?')
        
    //     setUse(firtname)
    // },[])
    
    // console.log(this.firtname)
    // setUse(firtname)
    // if(num < 55) {
    //     // location.reload();
    //     document.body.style.backgroundColor = 'red'
        
    // }
    const inputRef = useRef()
    useEffect(() => {
        // inputRef.current.focous()
        inputRef.current.focus();
        
    },[])
    return (
        <div  style={{textAlign:'center'}}>
            {num<50 && <h1>اشتراک شما به پایان رسید</h1>} 
            <h1>کلیک کن اینجا </h1>
            <button onClick={clickHandler}>{name}</button>
            <h1>{name == 'Dark' ? 'Soheil Mood' : 'Kasra Mood'}</h1>
            {name == 'White' && <h1>حسین کونی</h1>}
            {name == 'White' && <h1>علی کون حسین رو جر میده</h1>}
            <h2>{num}</h2>
            <h2>Welcome : {use}</h2>
            {/* <h3>حرف دلت رو بزن</h3> */}
            <input ref={inputRef} type="text"
            // style={undefined ? {background:'red'} : {backgroundColor:'white'}}
            />
            <div>
                {[
                    <div key={1}>Soheil</div>,
                    <div key={2}>Kasra</div>,
                    <div key={3}>Rostami</div>,
                ]}
            </div>
        </div>
    )
}

