import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get("https://api.github.com/users/BasitAyaz")
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
  return (
    <div>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github
