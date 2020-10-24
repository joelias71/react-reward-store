import React from 'react'

function RadioBtn({ text, value, group }) {
    return (
        <div className='radioBtn' >
            <label>{text}</label>
            <input type="radio" value={value} name={group} />
        </div>
    )
}

export default RadioBtn
