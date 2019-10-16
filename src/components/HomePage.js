import React, { Component } from 'react'
import Footer from "./Footer"

export default class HomePage extends Component {
    render() {
        return (
            <div style={containerStyle}>
                <div className='col'>
                    <div className='row' style={rowStyle}>
                        <div className='col' style={nameStyle}></div>
                        <div className='col' style={nameStyle}>
                            <p>Ehunnie</p>
                            <img src={require("../assets/guild_logo.png")} alt="guild_logo" />
                            <p>Academy</p>
                        </div>
                        <code className='col' style={sloganStyle}>
                            &#123; A super secret society &#125;
                        </code>
                    </div>
                    <div className='row'>
                    <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

const rowStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
}

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    fontFamily: 'courier',
    color: 'white',
    width: '100%',
}

const sloganStyle = {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 'calc(8px + 2vmin)',
    color: '#C2616A'
}

const nameStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontSize: 'calc(80px + 2vmin)'
}