/* eslint no-underscore-dangle: 0 */
import React, { Component } from 'react';
import { Table, Pagination,Button,Icon,Loading } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import FilterForm from './components/FilterForm';
import TableCon from './components/TableCon';
import EditDialog from './components/EditDialog';
import DeleteBalloon from './components/DeleteBalloon';
import axios from 'axios';
import { loadavg } from 'os';

export default class FilterTable extends Component {
  static displayName = 'EnhanceTable';

  static defaultProps = {};

  constructor(props) {
    super(props);

    // 请求参数缓存
    this.queryCache = {};
    this.state = {
      loading:true,
      filterFormValue: {},
      firTableValue: {},
      tableData:[],
      dataSource: [],
      itemDataSource:[],
      pageSize:10,
      currentPage:1,
      pageSize:5,
      total:1,
    };

    this.columns = [
      {
        title: '配置名称 ',
        dataIndex: 'configName',
        key: 'configName',
      },
      {
        title: '配置编码',
        dataIndex: 'configCode',
        key: 'configCode',
      },
      {
        title: '配置值',
        dataIndex: 'configValue',
        key: 'configValue',
      },
      {
        title: '类型',
        dataIndex: 'configType',
        key: 'configType',
        render: this.renderTypes,
      },
      {
        title: '操作',
        key: 'action',
        render: (value, index, record) => {
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
        },
      },
    ];
  }
//react生命周期
  componentDidMount() {
    this.state.pageIndex = 1;
    this.fetchData();
  }
//获取符合条件数据
  fetchData = () => {
    // axios.get('/apijc/loan/sysDict/queryListSysDict',{params:this.queryCache})
    // .then((response) => {
    //   this.setState({
    //     tableData : response.data.data,
    //     ../../loading:false,
    //   });
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    axios.get('table.json')
      .then((response) => {
        console.log(response)
        this.setState({
          dataSource: TABLE/DATA.data,
          loading:false,
        })
      })
      .catch((error) => {

      });
    
  };
//更改页数
  changePage = (currentPage) => {
    this.queryCache.pageIndex = currentPage;
    this.fetchData();
  };
//表单数据更改
  filterFormChange = (value) => {
    this.setState({
      filterFormValue: value,
    });
  };
//submit提交
  filterTable = () => {
    // 合并参数，请求数据
    this.queryCache = {
      ...this.queryCache,
      ...this.state.filterFormValue,
    };
    this.fetchData();
  };
//重置
  resetFilter = () => {
    this.setState({
      filterFormValue: {
        configName:'',
        configCode:'',
        configValue:'',
        configType:null
      },
      //组件本身bug，暂时无法通过初始化数据来操作
      // filterFormValue:{}

    });
  };
//编辑--提交获得当前数据信息
  getFormValues = (values, dataIndex) => {
    // axios.get('/apijc/loan/sysDict/updateSysDict',{params:values})
    //   .then((response) => {
    //     this.fetchData();
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    const { dataSource } = this.state;
    dataSource[dataIndex] = values;
    this.setState({
      dataSource,
    });
  };

//新增--提交获得当前数据信息
addFormValues = (values) => {
  // axios.get('/apijc/loan/sysDict/updateSysDict',{params:values})
  //   .then((response) => {
  //     this.fetchData();
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  const { dataSource } = this.state;
  dataSource.push(values);
  this.setState({
    dataSource,
  });
};

  handleRemove = (value, index,record) => {
    // axios.get('/apijc/loan/sysDict/deleteSysDict',{params:{ids:record.id}})
    //   .then((response) => {
    //       this.fetchData();
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    const { dataSource } = this.state;
    dataSource.splice(index, 1);
    this.setState({
      dataSource,
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
    // const { filterFormValue,tableData,subTableData,loading } = this.state;

    return (
      /**
       * 全页面loading遮盖 
       * <Loading visible={this.state.isloading} shape="dot-circle">
       */
      <div className="filter-table">
        <IceContainer title="内容筛选">
          <FilterForm
            value={this.state.filterFormValue}
            onChange={this.filterFormChange}
            onSubmit={this.filterTable}
            onReset={this.resetFilter}
          />
        </IceContainer>
        <IceContainer>
          <div>
              <EditDialog
                getFormValues={this.addFormValues}
                title='新增'
                icon='add'
              />
          </div>
          <TableCon 
            dataSource={this.state.dataSource}
            columns = {this.columns}
            isLoading ={this.state.loading}
            hasBorder = {false}
            className ="basic-table"
            current={this.state.currentPage}
            pageSize={this.state.total}
            changePage={this.changePage}
            total={this.state.total}
          />
          {/* <Table
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
          </div>*/}
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
  batchBtn:{
    marginRight:'10px',
  }
};


const TABLE_DATA = {
  "bizTotalFlag": null,
  "data": [{
    "baseExt2": null,
    "baseExt3": null,
    "baseExt4": null,
    "baseExt5": null,
    "baseExt6": null,
    "baseExt7": null,
    "configCode": "isElectricPin_Operate_Switch",
    "configName": "电销进件客户操作",
    "configType": "1",
    "configValue": "yes",
    "createOrgNameExt": null,
    "createUserNameExt": null,
    "id": 12629,
    "opUserId": null,
    "userOrgId": null,
    "validateState": "1",
    "version": null
  }, {
    "baseExt2": null,
    "baseExt3": null,
    "baseExt4": null,
    "baseExt5": null,
    "baseExt6": null,
    "baseExt7": null,
    "configCode": "rule_call_refuse_switch",
    "configName": "规则引擎调用开关（三方多头拒贷）",
    "configType": "1",
    "configValue": "yes",
    "createOrgNameExt": null,
    "createUserNameExt": null,
    "id": 12627,
    "opUserId": null,
    "userOrgId": null,
    "validateState": "1",
    "version": null
  }, {
    "baseExt2": null,
    "baseExt3": null,
    "baseExt4": null,
    "baseExt5": null,
    "baseExt6": null,
    "baseExt7": null,
    "configCode": "MK_CONTRACT_PRODUCTCODE",
    "configName": "秒扣试点产品标识",
    "configType": "1",
    "configValue": "PTL180500154",
    "createOrgNameExt": null,
    "createUserNameExt": null,
    "id": 12626,
    "opUserId": null,
    "userOrgId": null,
    "validateState": "1",
    "version": null
  }, {
    "baseExt2": null,
    "baseExt3": null,
    "baseExt4": null,
    "baseExt5": null,
    "baseExt6": null,
    "baseExt7": null,
    "configCode": "MK_CONTRACT_CALCULATOR",
    "configName": "秒扣试点合同计算器",
    "configType": "1",
    "configValue": "AC10044",
    "createOrgNameExt": null,
    "createUserNameExt": null,
    "id": 12625,
    "opUserId": null,
    "userOrgId": null,
    "validateState": "1",
    "version": null
  }, {
    "baseExt2": null,
    "baseExt3": null,
    "baseExt4": null,
    "baseExt5": null,
    "baseExt6": null,
    "baseExt7": null,
    "configCode": "mx_rhzx_query_switch",
    "configName": "魔蝎人行征信查询开关",
    "configType": "1",
    "configValue": "no",
    "createOrgNameExt": null,
    "createUserNameExt": null,
    "id": 12624,
    "opUserId": null,
    "userOrgId": null,
    "validateState": "1",
    "version": null
  }, {
    "baseExt2": null,
    "baseExt3": null,
    "baseExt4": null,
    "baseExt5": null,
    "baseExt6": null,
    "baseExt7": null,
    "configCode": "rhzx_auto_q_waiting_time",
    "configName": "征信自动查询结果等待时间(秒)",
    "configType": "1",
    "configValue": "5",
    "createOrgNameExt": null,
    "createUserNameExt": null,
    "id": 12623,
    "opUserId": null,
    "userOrgId": null,
    "validateState": "1",
    "version": null
  }, {
    "baseExt2": null,
    "baseExt3": null,
    "baseExt4": null,
    "baseExt5": null,
    "baseExt6": null,
    "baseExt7": null,
    "configCode": "mxzx_login_url",
    "configName": "魔蝎征信查询登录URL",
    "configType": "1",
    "configValue": "https://api.51datakey.com/h5/importV3/index.html#/zhengxin?showTitleBar=NO&apiKey=28fd24bb223a48d4b3055cf3692aa50e",
    "createOrgNameExt": null,
    "createUserNameExt": null,
    "id": 12622,
    "opUserId": null,
    "userOrgId": null,
    "validateState": "1",
    "version": null
  }, {
    "baseExt2": null,
    "baseExt3": null,
    "baseExt4": null,
    "baseExt5": null,
    "baseExt6": null,
    "baseExt7": null,
    "configCode": "isByTemplate",
    "configName": "是否使用模板生成快催文件",
    "configType": "1",
    "configValue": "1",
    "createOrgNameExt": null,
    "createUserNameExt": null,
    "id": 12621,
    "opUserId": null,
    "userOrgId": null,
    "validateState": "1",
    "version": null
  }, {
    "baseExt2": null,
    "baseExt3": null,
    "baseExt4": null,
    "baseExt5": null,
    "baseExt6": null,
    "baseExt7": null,
    "configCode": "ruleEngine_url",
    "configName": "规则引擎地址",
    "configType": "1",
    "configValue": "http://172.18.100.168:10005/fintech-ruleEngine/api/ruleEngine/funcPointRuleHit/v1",
    "createOrgNameExt": null,
    "createUserNameExt": null,
    "id": 12617,
    "opUserId": null,
    "userOrgId": null,
    "validateState": "1",
    "version": null
  }, {
    "baseExt2": null,
    "baseExt3": null,
    "baseExt4": null,
    "baseExt5": null,
    "baseExt6": null,
    "baseExt7": null,
    "configCode": "third_refuse_switch",
    "configName": "多头三方拒贷开关",
    "configType": "1",
    "configValue": "yes",
    "createOrgNameExt": null,
    "createUserNameExt": null,
    "id": 12616,
    "opUserId": null,
    "userOrgId": null,
    "validateState": "1",
    "version": null
  }],
  "endIndex": 0,
  "msg": null,
  "pageIndex": 1,
  "pageSize": 10,
  "sortName": null,
  "sortType": "asc",
  "startIndex": 0,
  "status": "ok",
  "totalRows": 738
}
