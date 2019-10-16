import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer style={style}>@Copyright 2019 pvemander@gmail.com</footer>
        );
    }
}

const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#191b1f',
    color: 'white',
    fontSize: 'calc(1px + 1.5vmin)',
    padding: 10,
    width: '100%'
}