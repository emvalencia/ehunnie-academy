import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import HomePage from './components/HomePage';
import SidebarMenu from './components/SidebarMenu';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div class='wrapper' style={style}>
      <HomePage />
    </div>
  );
}

const style = {
  display: 'flex',
  alignItems: 'stretch',
  minHeight: '100vh'
}

ReactDOM.render(<App />, document.getElementById("root"));
