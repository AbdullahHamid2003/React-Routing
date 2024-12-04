import React from 'react'

const Button = (props) => {
    const {buttonText, buttonClick} = props
  return (
    <div>
      <button onClick={buttonClick}>{buttonText}</button>
    </div>
  )
}

export default Button
