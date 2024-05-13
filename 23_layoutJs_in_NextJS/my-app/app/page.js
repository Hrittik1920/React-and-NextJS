import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='flex justify-center size-80 bg-slate-600 my-5 relative'>
      <Image src='/unnamed.jpg' fill={true} /*width={800} height={800}*/ className='object-cover' alt="Dad & Doughter"/>
    </div>
  )
}

export default page

