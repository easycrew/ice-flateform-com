import React, { Component } from 'react';
import { Input, Grid, Select, Button, DatePicker,Icon,Form } from '@icedesign/base';

// form binder 详细用法请参见官方文档
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
} from '@icedesign/form-binder';

const { Row, Col } = Grid;
const { Option } = Select;
const FormItem = Form.Item;

const formItemLayout = {
      labelCol: {
        fixedSpan: 10
      },
      wrapperCol: {
        span: 14
      }
    };

export default class Filter extends Component {
  static displayName = 'Filter';

  render() {
    return (
      <IceFormBinderWrapper
        value={this.props.value}
        onChange={this.props.onChange}
      >
      <Form>
        <div>
          <Row wrap>
            <Col xxs={24} xs={12} l={6} style={styles.filterCol}>
              <label style={styles.filterTitle}>配置名称</label>
              <IceFormBinder>
                <Input name="configName" />
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={6} style={styles.filterCol}>
              <label style={styles.filterTitle}>配置编码</label>
              <IceFormBinder>
                <Input name="configCode" />
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={6} style={styles.filterCol}>
              <label style={styles.filterTitle}>配置值</label>
              <IceFormBinder>
                <Input name="configValue" />
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={6} style={styles.filterCol}>
              <label style={styles.filterTitle}>类型</label>
              <IceFormBinder>
                <Select
                  name="configType"
                  placeholder="请选择类型"
                  style={styles.filterTool}
                >
                  <Option value="0">系统级</Option>
                  <Option value="1">项目级</Option>
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
              <Icon type="refresh" />
              重置
            </Button>
            <Button
              onClick={this.props.onSubmit}
              type="primary"
              style={{ marginLeft: '10px' }}
            >
              <Icon type="search" />
              查询
            </Button>
          </div>
        </div>
        </Form>
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
    // width: '68px',
    textAlign: 'right',
    marginRight: '12px',
    fontSize: '14px',
  },

  filterTool: {
    width: '200px',
  },
};
