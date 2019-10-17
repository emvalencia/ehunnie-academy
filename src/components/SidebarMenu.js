import React, { Component } from 'react'

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
                    <img src={require("../assets/close_menu.png")} alt="hamburger_logo" style={hamburgerStyle} onClick={this.toggleMenu}/>
                    <div className='row' style={menuOptionsStyle}>
                        <div className='col'>About</div>
                        <div className='col'>Schedule</div>
                        <div className='col'>Builds</div>
                        <div className='col'>Roster</div>
                        <div className='col'>Contact</div>
                    </div>
                </div>
            )
        } else {
            return (
                <div style={closedMenuStyle}>
                    <img src={require("../assets/hamburger.png")} alt="close_menu" style={hamburgerStyle} onClick={this.toggleMenu}/>
                </div>
            )
        }
    }
}

const openMenuStyle = {
    width: '50%',
    background: '#C2616A'
}

const closedMenuStyle = {
    width: '50%',
    background: 'transparent'
}

const hamburgerStyle = {
    width: '30%',
}

const menuOptionsStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'row-reverse',
    // height: '100vh',
    fontSize: 'calc(30px + 2vmin)',
    fontFamily: 'consolas'
}
