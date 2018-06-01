import React, { Component } from 'react';
import { Input, Button, Grid, Feedback, Table, Pagination } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import IceTitle from '@icedesign/title';

const { Row, Col } = Grid;
const Toast = Feedback.toast;
const dataSource = () => {
  return [
    {
      key: '姓名',
      value: '张三',
    },
    {
      key: '性别',
      value: '男',
    },
    {
      key: '年龄',
      value: '25',
    },
    {
      key: '籍贯',
      value: '杭州',
    },
    {
      key: '职业',
      value: '程序员',
    },
  ];
  // return []
};

export default class PrivateDataForm extends Component {
  static displayName = 'PrivateDataForm';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      data: '',
      current:1,
      hideOnlyOnePage:true
    };
  }


  handleChange = (current) => {
    this.setState({
      current
    })
  }
  dataChange = (data) => {
    this.setState({
      data,
    });
  };

  onRowClick = () => {
    
  }

  changeData = () => {
    const { data } = this.state;
    if (data) {
      Toast.success('发送成功');
      return;
    }
    Toast.error('您还有未填项');
  };

  render() {
    return (
      <div className="private-message-form">
        <IceContainer>
        <IceTitle text="原始数据" />
          <Row style={styles.formRow}>
            <Col xxs="5" s="5" l="2">数据内容</Col>
            <Col s="20" l="20">
              <Input
                style={{ width: '100%' }}
                multiple
                value={this.state.data}
                onChange={this.dataChange}
                placeholder="请输入内容"
              />
            </Col>
          </Row>

          <Row>
            <Col xxs="5" s="5" l="2">{' '}</Col>
            <Col>
              <Button type="primary" onClick={this.changeData}>转化数据</Button>
            </Col>
          </Row>
          <IceTitle text="转化数据" />
          <Table dataSource={dataSource()} onRowClick={this.onRowClick} primaryKey="key" rowSelection = {{mode:'single'}} style={styles.mb20}>
            <Table.Column title="KEY" dataIndex="key" />
            <Table.Column title="VALUE" dataIndex="value" />
          </Table>
          <Pagination
          current={this.state.current} 
          onChange={this.handleChange} 
          hideOnlyOnePage={this.state.hideOnlyOnePage}
          />

          
        </IceContainer>
        
      </div>
    );
  }
}

const styles = {
  formRow: {
    marginBottom: '20px',
  },
  mb20:{
    marginBottom:'20px'
  }
};
