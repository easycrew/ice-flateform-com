/* eslint no-underscore-dangle: 0 */
import React, { Component } from 'react';
import { Table, Pagination,Button,Icon,Loading } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import IceLabel from '@icedesign/label';
import FilterForm from './Filter';
import EditDialog from './EditDialog';
import SubEditDialog from './SubEditDialog';
import DeleteBalloon from './DeleteBalloon';
import axios from 'axios';

export default class EnhanceTable extends Component {
  static displayName = 'EnhanceTable';

  static defaultProps = {};

  constructor(props) {
    super(props);

    // 请求参数缓存
    this.queryCache = {
      pageSize:10,
    };
    this.subQueryCache = {
      pageSize:10,
      pageIndex:1,
    };
    this.state = {
      __loading:true,
      filterFormValue: {},
      firTableValue: {},
      tableData:[],
      subTableData:[],
      itemDataSource:[],
    };
  }

  componentDidMount() {
    this.queryCache.pageIndex = 1;
    this.fetchData();
  }
  renderHandle =  (value, index, record) => {
    return (
      <span>
        <EditDialog
          index={index}
          record={record}
          getFormValues={this.getFormValues}
        />
        <DeleteBalloon
          handleRemove={() => this.handleRemove(value, index, record)}
        />
      </span>
    );
  };
  subRenderHandle =  (value, index, record) => {
    return (
      <span>
        <SubEditDialog
          index={index}
          record={record}
          getFormValues={this.subGetFormValues}
        />
        <DeleteBalloon
          handleRemove={() => this.subHandleRemove(value, index, record)}
        />
      </span>
    );
  };

  fetchData = () => {
    axios.get('/apijc/loan/sysDict/queryListSysDict',{params:this.queryCache})
    .then((response) => {
      this.setState({
        tableData : response.data.data,
        __loading:false,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  subFetchData = () => {
    axios.get('/apijc/loan/sysDictDetail/queryListSysDictDetail',{params:this.subQueryCache})
    .then((response) => {
      this.setState({
        subTableData : response.data,
        __loading:false,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  renderOperations = (value, index, record) => {
    return (
      <div
        className="filter-table-operation"
        style={styles.filterTableOperation}
      >
        <a
          href="#"
          style={styles.operationItem}
          target="_blank"
          onClick={this.editItem.bind(this, record)}
        >
          编辑
        </a>
        <a href="#" style={styles.operationItem} target="_blank">
          删除
        </a>
      </div>
    );
  };

  changePage = (currentPage) => {
    this.queryCache.pageIndex = currentPage;
    this.fetchData();
  };

  subChangePage = (currentPage) => {
    this.subQueryCache.pageIndex = currentPage;
    this.subFetchData();
  }

  filterFormChange = (value) => {
    this.setState({
      filterFormValue: value,
    });
    console.log(this.state)
  };

  filterTable = () => {
    // 合并参数，请求数据
    this.queryCache = {
      ...this.queryCache,
      ...this.state.filterFormValue,
    };
    this.fetchData();
    this.setState({
      subTableData:[],
    })
  };
  subFilterTable = (record) => {
    this.subQueryCache = {
      ...this.subQueryCache,
      dictId:record.id
    }
    this.subFetchData();
  }

  resetFilter = () => {
    this.setState({
      filterFormValue: {
        dictName:'',
        dictCode:'',
        dictType:null
      },
      // filterFormValue:{}
    });
  };

  getFormValues = (values) => {
    axios.get('/apijc/loan/sysDict/updateSysDict',{params:values})
      .then((response) => {
        this.fetchData();
      })
      .catch((error) => {
        console.log(error);
      })
  };
  subGetFormValues = (values) => {
    axios.get('/apijc/loan/sysDictDetail/updateSysDictDetail',{params:values})
      .then((response) => {
        this.subFetchData();
      })
      .catch((error) => {
        console.log(error);
      })
  };

  handleRemove = (value, index,record) => {
    axios.get('/apijc/loan/sysDict/deleteSysDict',{params:{ids:record.id}})
      .then((response) => {
          this.fetchData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  subHandleRemove = (value, index,record) => {
    axios.get('/apijc/loan/sysDictDetail/deleteSysDictDetail',{params:{ids:record.id}})
      .then((response) => {
          this.subFetchData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  renderTypes = (value) => {
    const typeComponents ={
      0:'系统级',
      1:'项目级',
    }
    return typeComponents[value];
  }

  render() {
    const { filterFormValue,tableData,subTableData,__loading } = this.state;

    return (
      // <Loading visible={this.state.isloading} shape="dot-circle">
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
          <div><a href="#/cate/create"><Button style={styles.batchBtn}><Icon type="add" />新增</Button></a></div>
          <Table
            dataSource={tableData}
            isLoading={__loading}
            className="basic-table"
            style={styles.basicTable}
            hasBorder={false}
            onRowClick={(record)=>{this.subFilterTable(record)}}
          >
            <Table.Column title="ID" dataIndex="id" width={80} lock="left"/>
            <Table.Column title="数据字典名称" dataIndex="dictName" />
            <Table.Column title="数据字典编码" dataIndex="dictCode" />
            <Table.Column title="数据字典类型" dataIndex="dictType" cell={this.renderTypes} />
            <Table.Column title="操作" cell={this.renderHandle} />
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
        <IceContainer>
          <div><Button style={styles.batchBtn}><Icon type="add" />新增</Button></div>
          <Table
            dataSource={subTableData.data}
            isLoading={__loading}
            className="basic-table"
            style={styles.basicTable}
            hasBorder={false}
            >
            <Table.Column title="ID" dataIndex="id" />
            <Table.Column title="数据名称" dataIndex="dictDetailName" />
            <Table.Column title="数据值" dataIndex="dictDetailValue" />
            <Table.Column title="排序" dataIndex="orderBy" />
            <Table.Column title="操作" cell={this.subRenderHandle} />
          </Table>
          <div style={styles.paginationWrapper}>
            <Pagination
              current={subTableData.currentPage}
              pageSize={subTableData.pageSize}
              total={subTableData.total}
              onChange={this.changePage}
              />
          </div>
        </IceContainer>
      </div>
      // </Loading>
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
  batchBtn:{
    marginRight:'10px',
  }
};
