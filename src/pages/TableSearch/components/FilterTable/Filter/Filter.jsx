import React, { Component } from 'react';
import { Input, Grid, Select, Button, DatePicker,Icon,Form } from '@icedesign/base';
import axios from 'axios';

// form binder 详细用法请参见官方文档
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';

const { Row, Col } = Grid;
const { Option } = Select;
const FormItem = Form.Item;

export default class Filter extends Component {
  static displayName = 'Filter';

  constructor(props) {
    super(props);

    this.state = {
      channels:[],
      serviceDefs:[],
      disabled: true,
    };
  }

  componentWillMount() {
    axios.get('/api/cae/configMap/getChannels')
    .then((response) =>{
      if(response.status === 200){
        this.setState({
          channels:response.data.data
        })
      }
    })
    .catch((error) =>{
      console.log(error)
    })
  }

  channelSelected = (value) => {
    const channelNo = value;
    const params = {channelNo:channelNo};
    this.setState({
      channel: value,
      disabled: false 
    });
    axios.get('/api/cae/configMap/tcmapping/getServiceDef',{params:params})
    .then((response) => {
      if(response.status === 200){
        this.setState({
          serviceDefs:response.data.data
        })
      }
    })
  }
  
  channelChange = (value)=>{
    this.setState({
       serverDef: value 
      });
  }

  render() {
    const { channels,serviceDefs } = this.state;
    return (
      <IceFormBinderWrapper
        ref="form"
        value={this.props.value}
        onChange={this.props.onChange}
      >
        <div>
          <Row wrap>
          {/* <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>所属应用</label>
              <IceFormBinder>
                <Input name="app" />
              </IceFormBinder>
            </Col> */}
          <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>渠道名称</label>
              <IceFormBinder>
                <Select
                  name="size"
                  placeholder="请选择"
                  onChange={this.channelSelected}
                  style={styles.filterTool}
                  trigger={<Icon type="prompt" size="small" />}
                >
                  {
                    channels.map((item,index) => {
                      return(
                        <Option value={item.channelNo}>{item.channelName}</Option>
                      )
                    })
                  }
                </Select>
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>接口服务</label>
              <IceFormBinder>
                <Select
                  name="size"
                  placeholder="请选择"
                  disabled={this.state.disabled}
                  onChange={this.channelChange}
                  style={styles.filterTool}
                >
                  {
                    serviceDefs.map((item,index) => {
                      return(
                        <Option value={item.serviceNo}>{item.serviceName}</Option>
                      )
                    })
                  }
                 
                </Select>
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>请求方式</label>
              <IceFormBinder>
                <Select name="mappingState" style={styles.filterTool}>
                  <Option value="req">主动请求</Option>
                  <Option value="resp">响应请求</Option>
                </Select>
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>模板版本</label>
              <IceFormBinder>
                <Select name="templateVersion" style={styles.filterTool}>
                  <Option value="v1.0">V1.0</Option>
                  <Option value="v2.0">V2.0</Option>
                  <Option value="v3.0">V3.0</Option>
                </Select>
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>数据类型</label>
              <IceFormBinder>
                <Select name="dataType" style={styles.filterTool}>
                  <Option value="string">String</Option>
                  <Option value="number">Number</Option>
                  <Option value="array">Array</Option>
                </Select>
              </IceFormBinder>
            </Col>
          </Row>
          <div
            style={{
              textAlign: 'left',
              marginLeft: '12px',
            }}
          >
            <Button onClick={this.props.onReset} type="normal">
              重置
            </Button>
            <Button
              onClick={this.props.onSubmit}
              type="primary"
              style={{ marginLeft: '10px' }}
            >
              确定
            </Button>
          </div>
        </div>
      </IceFormBinderWrapper>
    );
  }
}

const styles = {
  filterCol: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },

  filterTitle: {
    width: '68px',
    textAlign: 'right',
    marginRight: '12px',
    fontSize: '14px',
  },

  filterTool: {
    width: '200px',
  },
};
