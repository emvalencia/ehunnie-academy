import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import HomePage from './components/HomePage';
import SidebarMenu from './components/SidebarMenu';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div style={containerStyle}>
       <div style={contentStyle}>
        <HomePage />
      </div>
      <div style={sidebarStyle}>
        <SidebarMenu />
      </div>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  alignItems: 'stretch',
  minHeight: '100vh'
}

const sidebarStyle = {
  display: 'flex',
  position: 'absolute',
  minHeight: '100vh'
}

const contentStyle = {
  display: 'flex',
  background: '#282c34',
  minWidth: '100%'
}

ReactDOM.render(<App />, document.getElementById("root"));
