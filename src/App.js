import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import SidebarMenu from './components/SidebarMenu';

export default class App extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <div style={contentStyle}>
          <Home />
        </div>
        <div style={sidebarStyle}>
          <SidebarMenu />
        </div>
      </div>
    );
  }
}

const containerStyle = {
  display: 'flex',
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
  display: 'flex',
  background: '#282c34',
  minWidth: '100%'
}


