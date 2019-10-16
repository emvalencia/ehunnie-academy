import React, { Component } from 'react'

class SidebarMenu extends Component {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            /* nothing */
        }
    }

    render() {
        return (
         <div>
             <img src='../assets/hamburger.png' alt='hamburger_logo' />
         </div>  
        )
    }
}

export default SidebarMenu
