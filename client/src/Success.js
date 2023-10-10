import React from 'react'

export default function Success({ message = "Success!" }) {
    return (
        <div className="success mt1 mb1">{message}</div>
    )
}
