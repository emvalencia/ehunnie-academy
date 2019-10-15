import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer style={style}>@Copyright Pvemander</footer>
        );
    }
}

const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#191b1f',
    color: 'white',
    fontSize: 'calc(3px + 2vmin)'
}

export default Footer;