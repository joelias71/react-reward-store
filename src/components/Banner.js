import React from 'react'

function Banner({ text, bgImage }) {
    return (
        <div className={`banner ${bgImage}`}>
            <h1>{ text }</h1>
        </div>
    )
}

export default Banner
