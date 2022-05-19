import React from 'react'

//Style
import './style.css'

let Container = (props) => {
  
  return (
    <div className='container'>
        {props.children}
    </div>
  )
}

export default Container
