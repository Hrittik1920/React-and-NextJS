import React from 'react'
import fs from 'fs/promises'

const page = () => {
    console.log("I will only get seen in terminal, rather then other consoles")
    let a = fs.readFile(".gitignore");
    a.then(e => console.log(e.toString()))

  return (
    <div>
      I am about page which console.log data only got console in server own terminal
    </div>
  )
}

export default page
