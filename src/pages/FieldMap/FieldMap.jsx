import React, { Component } from 'react';
// import PrivateMessageForm from './components/PrivateMessageForm';
// import InfoDisplayTable from './components/InfoDisplayTable';
import CombineData from './components/CombineData';

export default class FieldMap extends Component {
  static displayName = 'FieldMap';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="field-map-page">
        {/* <PrivateMessageForm /> */}
        {/* <InfoDisplayTable /> */}
        <CombineData />
      </div>
    );
  }
}
