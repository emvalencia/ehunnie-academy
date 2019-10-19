import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SidebarMenu extends Component {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            toggle: false
        }
    }

    /* boolean that triggers opening and closing of menu */
    toggleMenu = () => {
        this.setState({ toggle: !this.state.toggle})
    }

    render() {
        if (this.state.toggle) {
            return (
                <div style={openMenuStyle}>
                    <img src={require("../assets/close_menu.png")} alt="hamburger_logo" width={55} style={openImgStyle} onClick={this.toggleMenu}/>
                    <div className='col' style={menuOptionsStyle}>
                        <Link to="/Home" style={link}>Home</Link>
                    </div>
                    <div className='col' style={menuOptionsStyle}>
                        <Link to="/About" style={link}>About</Link>
                    </div>
                    <div className='col' style={menuOptionsStyle}>
                        <Link to="/Schedule" style={link}>Schedule</Link>
                    </div>
                    <div className='col' style={menuOptionsStyle}>
                        <Link to="/Builds" style={link}>Builds</Link>
                    </div>
                </div>
            )
        } else {
            return (
                <div style={closedMenuStyle}>
                    <img src={require("../assets/hamburger.png")} alt="close_menu" width={65} onClick={this.toggleMenu}/>
                </div>
            )
        }
    }
}

/* top, right, bottom, and left */
const openMenuStyle = {
    background: '#C2616A',
    padding: '5px'
}

const openImgStyle = {
    paddingBottom: '20px'
}

const closedMenuStyle = {
    background: 'transparent',
    padding: '5px'
}

const menuOptionsStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    fontSize: 'calc(15px + 2vmin)',
    fontFamily: 'consolas',
    padding: '10px 30px 0px 30px'
}

const link = {
    color: 'white'
}