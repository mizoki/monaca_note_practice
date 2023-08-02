import React from 'react';
import ReactDOM from 'react-dom';
import { Page } from 'react-onsenui';
import AppBar from './AppBar';

export default class App extends React.Component {
  renderToolbar() {
    return (
      <AppBar />
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
      </Page>
    );
  }
}