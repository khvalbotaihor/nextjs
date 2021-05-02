import React from 'react'
import Router from 'next/router'

export default function Index() {

    const linkClickHandler = () => {
        Router.push('/')
    }

    return (
        <React.Fragment>
            <h1>About Page</h1>
            <button onClick={linkClickHandler}>Go back to home</button>
        </React.Fragment>
    )
}
