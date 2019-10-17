import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import Footer from "./Footer"
import { conditionalExpression } from '@babel/types'

export default class HomePage extends Component {

    state = {
        isSmallMedia: false
    }

    handleWindowResize = () => {
        this.setState({ isSmallMedia: window.innerWidth < 1124 });
    }
    
    componentDidMount() {
        window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
    }

    render() {
        const  {isSmallMedia } = this.state;

        if (isSmallMedia) {
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
                    <div className='row' style={rowStyle}>
                        {/* <Footer /> */}
                    </div>
                </div>
            );
        } else {
            return (
                <div style={containerStyle}>
                    <div className='row'>
                        <div className='col' style={nameStyle}>
                            <p className='row'>Ehunnie</p>
                            <img src={require("../assets/guild_logo.png")} alt="guild_logo" />
                            <p className='row'>Academy</p>
                        </div>
                    </div>
                    <code className='row' style={sloganStyle}>
                        &#123; A super secret society &#125;
                    </code>
                </div>
            )
        }
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

// const rowStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     // height: '100vh',
//     // background: 'purple'
// }

// const containerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     flexDirection: 'column',
//     fontFamily: 'courier',
//     color: 'white',
//     width: '100%',
//     // background: 'green'
// }

// const sloganStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     fontSize: 'calc(8px + 2vmin)',
//     color: '#C2616A',
//     // background: 'blue'
// }

// const nameStyle = {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: 'calc(8px + 10vmin)',
//     // background: 'pink',
//     height: '100%',
// }

const rowStyle = {
    display: 'flex',
    flexDirection: 'column',
}

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    fontFamily: 'courier',
    color: 'white',
    width: '100%',
    height: '100%'
}

const sloganStyle = {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 'calc(8px + 2vmin)',
    color: '#C2616A'
}

const nameStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(8px + 10vmin)'
}