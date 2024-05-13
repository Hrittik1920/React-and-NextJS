"use client"
import React from 'react'
import { submitAction } from '@/actions/form'
import { useRef } from 'react'

const page = () => {
  let ref = useRef();
  return (
    <div>
      <form ref={ref} className='flex flex-col gap-2 justify-center items-center h-screen'
        action={(e) => {
          submitAction(e);
          ref.current.reset();
        }}>
        <div>
          <label htmlFor="name">
            <input name="name" placeholder='name' id='name' className='text-black px-2 py-0.5 rounded-md' type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="add">
            <input name="add" id='add' placeholder='address' className='text-black px-2 py-0.5 rounded-md' type="text" />
          </label>
        </div>
        <div>
          <button className='px-2 py-1 bg-teal-500 rounded-xl'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default page

