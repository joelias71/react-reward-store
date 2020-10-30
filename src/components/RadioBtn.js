import React from 'react'

function RadioBtn({ text, value, group }) {
    return (
        <div className='radioBtn' >
            <label>
                {text}
                <input type="radio" value={value} name={group} />
                <span class="checkmark"></span>
            </label>
        </div>
    )
}

export default RadioBtn
