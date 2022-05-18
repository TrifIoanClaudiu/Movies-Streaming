import React from 'react'
import "./ErrorPage.css"

function ErrorPage() {
    return (
        <div className="Container"> 
            <div className="Mars"></div>

                <img src="https://assets.codepen.io/1538474/404.svg" alt="logo-404" className="Logo404" />
                <img src="https://assets.codepen.io/1538474/meteor.svg" alt="meteor" className="Meteor" />

                <p className="Title">Oh no!!</p>
                <p className="Subtitle">
                    You’re either misspelling the URL <br /> or requesting a page that's no longer here.
                </p>
                <div align="center">
                    <a className="btn-back" href="/">Back to home page</a>
                </div>

                <img src="https://assets.codepen.io/1538474/astronaut.svg" alt="astronaut" className="Astronaut" />
                <img src="https://assets.codepen.io/1538474/spaceship.svg" alt="spaceship" className="Spaceship" />

        </div>
    )
}

export default ErrorPage
