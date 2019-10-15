import React, { Component } from 'react';
import Footer from "./Footer"
import HamburgerMenu from "./HamburgerMenu";

class HomePage extends Component {
    render() {
        return (
            <div>
                {/* <HamburgerMenu /> */}
                <div style={style}>
                    <p>Ehunnie</p>
                    <header>
                        <img src={require("../assets/guild_logo.png")} alt="logo" />
                    </header>
                    <p>Academy</p>
                </div>
                <Footer />
            </div>
        );
    }
}

const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#282c34',
    color: 'white',
    height: '100vh',
    fontSize: 'calc(45px + 2vmin)',
    fontFamily: 'consolas'
}

export default HomePage;