import React from 'react';
import ReactDOM from 'react-dom';
import { Toolbar } from 'react-onsenui';

export default class AppBar extends React.Component {
  render() {
    return (
      <Toolbar>
        <div className='center'>Note Sample</div>
      </Toolbar>
    );
  }
}