import React from 'react'

export default function Banner({title, substitle, children}) {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div></div>
            <p>{substitle}</p>
            {children}
        </div>
    )
}
