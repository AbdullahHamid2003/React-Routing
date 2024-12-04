import React from 'react'

const InputComponent = (props) => {

    const {label, onchange, type, value} = props
  return (
    <div>
      <input type={type} placeholder={label} onchange={onchange} value={value}/>
    </div>
  )
}

export default InputComponent
