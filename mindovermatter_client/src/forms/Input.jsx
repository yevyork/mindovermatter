import React from 'react'

const Input = props => {
  const {handleChange, name, placeholder, id, type, value} = props
    return (
      <>
        <label htmlFor={name}>{id}</label>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </>
    )
}

export default Input
