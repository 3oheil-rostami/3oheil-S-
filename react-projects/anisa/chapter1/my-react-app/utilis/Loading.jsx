import React, { useEffect, useState } from 'react'

export default function Loading() {

    const [loading , setLoading] = useState(true)

    useEffect(() => {
        setInterval(() => {
            setLoading(false)
        }, 1000);
    },[])
    
  return (
    <div>
      {loading && <div style={{ textAlign: 'center', fontSize: '20px' }}>Loading ...</div> }
    </div>
  )
}
