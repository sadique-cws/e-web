"use client"
import React, { useState } from 'react'

const Card = (props) => {
  return (
    <div className='card' style={{ backgroundColor:props.bg }}>
        <h2>{props.title}</h2>
        <p>{props.content || " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nemo! Similique distinctio mollitia voluptatum itaque maxime cumque totam dolor, eius, fugiat veritatis perferendis, consequatur quam. Totam alias impedit numquam sequi."}
       
        </p>
        <div className="end">
            <a href="" className='btn'>Read More</a>
        </div>
    </div>
  )
}

export default Card