import React from 'react'
import "./Card.css";

const Card = (props) => {
  return (
    <div className='card' style={{overflow:"hidden"}}>
        <img src="https://media.istockphoto.com/id/1500238408/photo/program-code-development-icon-on-a-digital-lcd-display-with-reflection.webp?b=1&s=170667a&w=0&k=20&c=CfaVabgMcwwc-ijzVAxNs_Sz6q3JVPJnlQ-Py-dpuAQ="
        alt="CodingImage" width={333} style={{borderBottom: "2px solid peachpuff"}} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Card
