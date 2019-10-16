import React, { Component } from 'react'

export default class SidebarMenu extends Component {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            toggle: true
        }
    }

    /* boolean that triggers opening and closing of menu */
    toggleMenu () {
        this.setState({ toggle: !this.state.toggle})
    }

    render() {
        if (this.state.toggle) {
            return (
                <div style={menuStyle}>
                    <img src={require("../assets/hamburger.png")} alt="hamburger_logo" style={sidebarStyle} onClick={this.toggleMenu}/>
                </div>
            )
        } else {
            return (
                <div>
                    <img src={require("../assets/hamburger.png")} alt="hamburger_logo" style={sidebarStyle} onClick={this.toggleMenu}/>
                </div>
            )
        }
    }
}

const menuStyle = {
    width: '20%',
    background: '#C2616A'
}

const sidebarStyle = {
    width: '20%',
}
