import React, { useEffect, useRef, useState } from 'react'

 function CreateRef() {
    const inputRef = useRef()
    const [show , setShow] = useState(false)
    // useEffect(() => {
    //     inputRef.current.focus();
    // }, [])
    const clickHandler = () => {
        setShow(!show)
    }
    // console.log(show)
    useEffect(() => {
       if(show===true) {
         inputRef.current.focus()
       } 
    } , [show])

    return (
        <div>
            <div style={{ textAlign: 'center' }}>
              
                <button onClick={clickHandler}>search</button>
                {show && <input ref={inputRef} placeholder='search ...'/>}{show && <h1>pleas dont kos</h1>}
            </div>
        </div>
    )
}

export default CreateRef