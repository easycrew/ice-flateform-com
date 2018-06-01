import React, { Component } from 'react';
import FilterTable from './components/FilterTable';

export default class DataDictionary extends Component {
  static displayName = 'DataDictionary';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="DataDictionary-page">
        <FilterTable />
      </div>
    );
  }
}
