import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterTable from './components/FilterTable'

export default class FormAndTable extends Component {
  static displayName = 'FormAndTable';

  static propTypes = {
    value: PropTypes.string
  };

  static defaultProps = {
    value: 'string data'
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <FilterTable />
    );
  }
}

const styles = {

}
