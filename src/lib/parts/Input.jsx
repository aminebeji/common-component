import React from 'react'
import "./../styles/input.css"
function Input({ placeholder,value ,  name, onChange, classNameInput ="", Icon, classNameContainer = "" }) {
    return (
        <div className={`${classNameContainer}  main__input_container`}>
          {Icon &&   <Icon />}
            <input
                placeholder={placeholder}
                name={name} c
                className={`main__input ${classNameInput}`}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export default Input