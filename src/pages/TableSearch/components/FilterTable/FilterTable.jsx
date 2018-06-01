/* eslint no-underscore-dangle: 0 */
import React, { Component } from 'react';
import { Table, Pagination } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import IceLabel from '@icedesign/label';
import FilterForm from './Filter';
import axios from 'axios'

export default class EnhanceTable extends Component {
  static displayName = 'EnhanceTable';

  static defaultProps = {};

  constructor(props) {
    super(props);

    // 请求参数缓存
    this.queryCache = {
      pageSize:10,
    };
    this.state = {
      filterFormValue: {},
      tableData:{}
    };
  }

  componentDidMount() {
    this.queryCache.currentPage = 1;
    this.fetchData();
  }

  fetchData = () => {
    axios.get('/api/cae/configMap/findList/tcMapping',{params:this.queryCache})
    .then((response) => {
      this.setState({
        tableData : response.data.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  };

//改变页数
  changePage = (currentPage) => {
    this.queryCache.currentPage = currentPage;
    this.fetchData();
  };
//表单更改
  filterFormChange = (value) => {
    this.setState({
      filterFormValue: value,
    });
  };
//submit
  filterTable = () => {
        this.queryCache = {
          ...this.queryCache,
          ...this.state.filterFormValue,
        };
        this.fetchData();    
  };
//重置
  resetFilter = (e) => {
    e.preventDefault();
    this.field.reset();
    // this.setState({
    //   filterFormValue: {},
    // });
  };

  render() {
    const { filterFormValue, tableData } = this.state;
    return (
      <div className="filter-table">
        <IceContainer title="内容筛选">
          <FilterForm
            value={filterFormValue}
            onChange={this.filterFormChange}
            onSubmit={this.filterTable}
            onReset={this.resetFilter}
          />
        </IceContainer>
        <IceContainer>
          <Table
            dataSource={tableData.content}
            isLoading={tableData.__loading}
            className="basic-table"
            style={styles.basicTable}
            hasBorder={false}
          >
            <Table.Column
              title="模板编号"
              dataIndex="templateNo"
            />
            <Table.Column title="模板版本" dataIndex="templateVersion"/>
            <Table.Column
              title="原字段"
              dataIndex="sourceCoord"
            />
            <Table.Column
              title="目标字段"
              dataIndex="targetCoord"
            />
            <Table.Column
              title="目标字段KEY"
              dataIndex="targetCoordKey"
            />
            <Table.Column
              title="映射关系"
              dataIndex="coordRelation"
            />
            <Table.Column
              title="数据类型"
              dataIndex="dataType"
            />
          </Table>
          <div style={styles.paginationWrapper}>
            <Pagination
              current={tableData.currentPage}
              pageSize={tableData.pageSize}
              total={tableData.total}
              onChange={this.changePage}
            />
          </div>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  filterTableOperation: {
    lineHeight: '28px',
  },
  operationItem: {
    marginRight: '12px',
    textDecoration: 'none',
    color: '#5485F7',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    marginLeft: '10px',
    lineHeight: '20px',
  },
  paginationWrapper: {
    textAlign: 'right',
    paddingTop: '26px',
  },
};
