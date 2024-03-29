import React, { Component } from 'react';
import Footer from "./Footer";

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

    imgClicked = () => {
        alert("Git gud");
    }

    render() {
        const  {isSmallMedia } = this.state;

        /* for mobile/small layouts */
        if (isSmallMedia) {
            return (
                <div style={containerStyle}>
                    <div className='col' style={contentStyle}>
                        <div className='row' style={rowStyle}>
                            <div className='col' style={nameStyle}>Ehunnie</div>
                            <div className='col' style={nameStyle}>
                                <img src={require("../assets/guild_logo.png")} alt="guild_logo" onClick={this.imgClicked}/>
                            </div>
                            <div className='col' style={nameStyle}>Academy</div>
                        </div>
                        <code className='row' style={sloganStyle}>
                            &#123; A super secret society &#125;
                        </code>
                    </div>
                    <Footer />
                </div>
            );
        } 
        
        /* for web/larger layouts */
        else {
            return (
                <div style={containerStyle}>
                    <div className='col' style={contentStyle}>
                        <div className='row'>
                            <div className='col' style={nameStyle}>
                                <p className='row'>Ehunnie</p>
                                <img src={require("../assets/guild_logo.png")} alt="guild_logo" onClick={this.imgClicked}/>
                                <p className='row'>Academy</p>
                            </div>
                        </div>
                        <code className='row' style={sloganStyle}>
                            &#123; A super secret society &#125;
                        </code>
                    </div>
                    <Footer />
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