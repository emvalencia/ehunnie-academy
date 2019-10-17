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
                <div style={containerStyle}>
                    <div className='col' style={contentStyle}>
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
                    </div>
                    <div style={footerStyle}>
                        <Footer />
                    </div>
                </div>
            );
        } else {
            return (
                <div style={containerStyle}>
                    <div className='col' style={contentStyle}>
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
                    <div style={footerStyle}>
                        <Footer />
                    </div>
                </div>
            )
        }
    }
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
}

const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}

const footerStyle = {
    display: 'flex',
    maxHeight: '4%',
    justifyContent: 'flex-end',
    background: 'pink'
}

/* necessary for mobile layout */
const rowStyle = {
    flexDirection: 'column'
}

const sloganStyle = {
    justifyContent: 'center',
    fontSize: 'calc(8px + 2vmin)',
    color: '#C2616A'
}

const nameStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(8px + 10vmin)'
}