import React from 'react'

const Credit = () => {
    let date = new Date();
    let year = date.getFullYear() 
  return (
    <div className='credit'>
        <p>Created By CWS | &copy; copyright {year}</p>
    </div>
  )
}

export default Credit