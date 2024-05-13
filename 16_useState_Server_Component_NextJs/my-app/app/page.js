"use client"
import React from 'react'
import { useState } from 'react'

const page = () => {
  // So when we use   "use client"  then it will become a client component which will log below data in console
  // console.log("Hey I am Hrittk Singh")  // This data will get console which can be excessed by anyone, but not in server component

  const [count, setCount] = useState(0)

  return (
    <div className='my-5 gap-4 flex justify-center items-center'>
      Count value is {count}
      <button onClick={()=> setCount(count+1)} className='bg-blue-400 p-2 rounded-xl'>Click me</button>
    </div>
  )
}

export default page

