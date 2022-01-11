import React from "react"
import PropTypes from "prop-types"

const InputText =({label="",value,onChange})=>
{

    return (
        <>
         { label !== "" && <label htmlFor={label.toUpperCase().trim()} >label</label>  }
         <input type="text" name={label.toUpperCase().trim()} value={value} onChange={onChange}></input>
        </>
    )
}

InputText.prototype ={

    value: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired
}

export default InputText;