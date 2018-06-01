import React, { Component } from 'react';
import NotPermission from './components/NotPermission';

export default class Notpermission extends Component {
  static displayName = 'Notpermission';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="notpermission-page">
        <NotPermission />
      </div>
    );
  }
}
