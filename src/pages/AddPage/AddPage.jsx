import React, { Component } from 'react';
import SettingsForm from './components/SettingsForm';

export default class AddPage extends Component {
  static displayName = 'AddPage';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="add-page-page">
        <SettingsForm />
      </div>
    );
  }
}
