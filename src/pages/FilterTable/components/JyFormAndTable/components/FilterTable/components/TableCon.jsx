import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Pagination } from '@icedesign/base';
import IceContainer from '@icedesign/container';

export default class TableCon extends Component {
  static displayName = 'TableCon';

  static propTypes = {
    dataSource: PropTypes.array,
    columns: PropTypes.array.isRequired,
  };

  static defaultProps = {
    dataSource:[],
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderColumns = () =>{
    const { columns } = this.props;
    return columns.map((item) => {
      if (typeof item.render === 'function') {
        return (
          <Table.Column 
            title={item.title} 
            key={item.key}
            dataIndex={item.dataIndex}
            cell={item.render} 
            
          />
        );
      }
      return (
        <Table.Column
          key={item.key}
          title={item.title}
          dataIndex={item.dataIndex}
        />
      );
    });
  }

  render() {
    return (
      <IceContainer>
        <Table {...this.props}>{this.renderColumns()}</Table>
        <div style={styles.paginationWrapper}>
            <Pagination
              current={this.props.current}
              pageSize={this.props.pageSize}
              total={this.props.total}
              onChange={this.props.changePage}
            />
          </div>
      </IceContainer>
    );
  }
}

const styles = {
  paginationWrapper: {
    textAlign: 'right',
    paddingTop: '26px',
    paddingBottom: '10px',
  }
}
