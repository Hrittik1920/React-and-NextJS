import React from 'react'
import Script from 'next/script'

const page = () => {
  return (
    <div className='flex'>
      <Script>
        {` alert("Welcome to the About Us page of facebook!"); `}
      </Script>
      <div className='mx-auto'>
        <h1 className='text-xl font-bold my-2'>Which are the problem solve by next.js</h1>
        <ul>
            <li>Full Stack Development</li>
            <li>File based Routing</li>
            <li>Additional features like router from next/navigation</li>
            <li>Optamized rendering</li>
        </ul>
      </div>
    </div>
  )
}

export default page

export const metadata = {
  title: "About Facebook - All about Facebook",
  description: "This is about facebook and we can connect with the word using facebook",
};
