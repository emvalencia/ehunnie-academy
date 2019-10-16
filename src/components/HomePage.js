import React, { Component } from 'react'
import Footer from "./Footer"

class HomePage extends Component {
    render() {
        return (
            <div style={containerStyle}>
                <div className='col'>
                    <div className='row' style={style}>
                        <div className='col' style={nameStyle}></div>
                        <div className='col' style={nameStyle}>
                            <p>Ehunnie</p>
                            <img src={require("../assets/guild_logo.png")} alt="guild_logo" />
                            <p>Academy</p>
                        </div>
                        <div className='col' style={sloganStyle}>
                            &#123; A super secret society &#125;
                        </div>
                    </div>
                    <div className='row'>
                    <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

const style = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
}

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    fontFamily: 'monospace',
    background: '#282c34',
    color: 'white',
    width: '100%',
}

const sloganStyle = {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 'calc(8px + 2vmin)'
}

const nameStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontSize: 'calc(80px + 2vmin)'
}

export default HomePage