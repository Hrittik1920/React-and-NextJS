"use client"
import React from 'react'

const page = () => {
  let data = {
    name: "Hrittk",
    college: true
  }
  const handleClick = async () => {
    let a = await fetch("/api/add", {
      method: "POST", headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })
    let res = await a.json();
    console.log(res)
  }
  return (
    <div>
      <h1 className='text-xl font-bold'>Next.js API route demo</h1>
      <button onClick={handleClick} className='bg-blue-500  rounded-xl p-2'>Click me</button>
    </div>
  )
}

export default page

