import axios from 'axios'
import React, { useEffect } from 'react'

const Test = () => {
        useEffect(()=>{
      axios.get("https://api.themoviedb.org/3/discover/tv?api_key=a5f73350d9196ecd71486f064b5bbe6b&with_networks=213").then((res)=>{
        console.log("my data",res.data.results)
      }).then((err)=>{
        console.log("error",err)
      })
    },[])
  return (
    <div>Test</div>
  )
}

export default Test