import React, { Component } from 'react';
import TabTable from './components/TabTable';

export default class TabTableWrap extends Component {
  static displayName = 'TabTable';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tab-table-page">
        <TabTable />
      </div>
    );
  }
}
