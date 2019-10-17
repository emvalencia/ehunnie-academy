import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import Footer from "./Footer"

export default class HomePage extends Component {
    render() {
        return (
            <div className='col' style={containerStyle}>
                <div className='row' style={rowStyle}></div>
                <div className='row' style={rowStyle}>
                    <div className='col' style={nameStyle}>Ehunnie</div>
                    <div className='col' style={nameStyle}>
                        <img src={require("../assets/guild_logo.png")} alt="guild_logo"/>
                    </div>
                    <div className='col' style={nameStyle}>Academy</div>
                </div>
                <code className='row' style={sloganStyle}>
                    &#123; A super secret society &#125;
                </code>
                <div className='row' style={rowStyle}></div>
            </div>
        );
    }
}

/* old code that gets normal website design */
{/* <div style={containerStyle}>
<div className='col'>
    <div className='row' style={rowStyle}>
        <div className='col'></div>
        <div className='col' style={nameStyle}>
            <p className='row' style={nameStyle}>Ehunnie</p>
            <img src={require("../assets/guild_logo.png")} alt="guild_logo" />
            <p className='row' style={nameStyle}>Academy</p>
        </div>
        <code className='col' style={sloganStyle}>
            &#123; A super secret society &#125;
        </code>
    </div>
    <div className='row'>
    <Footer />
    </div>
</div>
</div> */}

const rowStyle = {
    display: 'flex',
    flexDirection: 'column',
    // height: '100vh',
    // background: 'purple'
}

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    fontFamily: 'courier',
    color: 'white',
    width: '100%',
    // background: 'green'
}

const sloganStyle = {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 'calc(8px + 2vmin)',
    color: '#C2616A',
    // background: 'blue'
}

const nameStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(8px + 10vmin)',
    // background: 'pink',
    height: '100%',
}