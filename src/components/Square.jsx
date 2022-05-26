import React from 'react'

const Square = ({gameState, onClick}) => {
  return (
    <span className='square' onClick={onClick} >{gameState}</span>
  )
}

export default Square;