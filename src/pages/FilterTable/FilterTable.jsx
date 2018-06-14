import React, { Component } from 'react';
import JyFormAndTable from './components/JyFormAndTable';

export default class FilterTable extends Component {
  static displayName = 'FilterTable';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="filter-table-page">
        <JyFormAndTable />
      </div>
    );
  }
}
