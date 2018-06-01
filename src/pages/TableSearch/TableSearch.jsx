import React, { Component } from 'react';
import FilterTable from './components/FilterTable';

export default class TableSearch extends Component {
  static displayName = 'TableSearch';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="table-search-page">
        <FilterTable />
      </div>
    );
  }
}
