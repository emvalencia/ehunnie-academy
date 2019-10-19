import React, { Component } from 'react';
import SidebarMenu from './SidebarMenu';
import { Parallax } from 'react-parallax';
import Footer from './Footer';


const About = () => (
<div style={containerStyle}>
    <div style={sidebarStyle}>
        <SidebarMenu />
    </div>
    {/* <Parallax
    bgImage={require('../assets/guild_logo.png')}
    bgImageAlt="the cat"
    strength={600}
    >
    <div style={{ height: '500px' }} />
    </Parallax>
    <Parallax
    bgImage={require('../assets/guild_logo_halloween.png')}
    bgImageAlt="the dog"
    strength={600}
    >
    <div style={{ height: '500px' }} />
    </Parallax>
    <Parallax
    bgImage={require('../assets/guild_logo.png')}
    bgImageAlt="the dog"
    strength={600}
    >
    <div style={{ height: '500px' }} />
    </Parallax> */}                    
    <Footer />
  </div>
)

export default About;

// export default class About extends Component {
//     render() {
//         return (
//             <div>
//                     {/* <div class='col' style={{background:'blue'}}>
//                         Things about us
//                     </div>
//                     <div class='col' style={{background:'red'}}>
//                         Things about us
//                     </div>
//                     <div class='col' style={{background:'green'}}>
//                         Things about us
//                     </div> */}
//                     <Parallax bgImage={require('../assets/guild_logo.png')}>
//                         One
//                     </Parallax>
//                     <Parallax bgImage={require('../assets/guild_logo_halloween.png')}>
//                         two
//                     </Parallax>
//                     <Parallax bgImage={require('../assets/guild_logo.png')}>
//                         Three
//                     </Parallax>
//                 {/* <div style={sidebarStyle}>
//                 <SidebarMenu />
//                 </div> */}
//             </div>
//         )
//     }
// }

const containerStyle = {
    // display: 'flex',
    alignItems: 'stretch',
    minHeight: '100vh',
    color: 'white',
    fontFamily: 'courier',
}
  
const sidebarStyle = {
    display: 'flex',
    position: 'absolute',
    minHeight: '100%'
}

  
const contentStyle = {
    // display: 'flex',
    // background: '#282c34',
    // minWidth: '100%'
}