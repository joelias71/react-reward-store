import React from 'react'

function RadioBtn({ text, value, group }) {
    return (
        <div className='radioBtn' >
            <label>
                {text}
                <input type="radio" value={value} name={group} />
                <span className="checkmark"></span>
            </label>
        </div>
    )
}

export default RadioBtn
