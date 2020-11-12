import React from 'react'
import './Wrapper.css'

function Wrapper(props) {
  return (
    <div className='container'>
      <div className='row'>
        { props.children }
      </div>
    </div>
  )
}

export default Wrapper;