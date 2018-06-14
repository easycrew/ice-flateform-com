import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid, Input, Button, Feedback,Select } from '@icedesign/base';
import {
  FormBinderWrapper,
  FormBinder,
  FormError,
} from '@icedesign/form-binder';
import './SimpleFluencyForm.scss';
import axios from 'axios';

const { Row, Col } = Grid;
const Toast = Feedback.toast;

export default class SimpleFluencyForm extends Component {
  static displayName = 'SimpleFluencyForm';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      formValue: {
      },
    };
  }

  formChange = (newValue) => {
    this.setState({
      formValue: newValue,
    });
  };

  handleSubmit = () => {
    this.form.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }
      axios.get('/apijc/loan/sysDict/insertSysDict',{params:values})
        .then((Response) => {
          if(Response.data.msg === '新增成功'){
            Toast.success('添加成功');
            location.href='/#/DataDictionary';
          }else{
            Toast.error('添加失败');
          }
        })
        .catch((error)=>{
          console.log(error)
        })
    });
  };

  render() {
    return (
      <div className="simple-fluency-form" style={styles.simpleFluencyForm}>
        <IceContainer style={styles.form}>
          <FormBinderWrapper
            ref={(form) => {
              this.form = form;
            }}
            value={this.state.formValue}
            onChange={this.formChange}
          >
            <div style={styles.formContent}>
              <h2 style={styles.formTitle}>添加数据字典</h2>
              <Row style={styles.formRow}>
                <Col xxs="6" s="4" l="3" style={styles.formLabel}>
                  <span>数据字典名称:</span>
                </Col>
                <Col xxs="16" s="10" l="6">
                  <FormBinder required message="必填项">
                    <Input name="dictName" />
                  </FormBinder>
                  <div style={styles.formErrorWrapper}>
                    <FormError name="dictName" />
                  </div>
                </Col>
              </Row>
              <Row style={styles.formRow}>
                <Col xxs="6" s="4" l="3" style={styles.formLabel}>
                  <span>数据字典编码:</span>
                </Col>
                <Col xxs="16" s="10" l="6">
                  <FormBinder required message="必填项">
                    <Input name="dictCode" />
                  </FormBinder>
                  <div style={styles.formErrorWrapper}>
                    <FormError name="dictCode" />
                  </div>
                </Col>
              </Row>
              <Row style={styles.formRow}>
                <Col xxs="6" s="4" l="3" style={styles.formLabel}>
                  <span>数据字典类型:</span>
                </Col>
                <Col xxs="16" s="10" l="6">
                  <FormBinder required message="必填项">
                    <Select
                      name="dictType"
                      placeholder='请选择'
                      style={styles.filterTool}
                    >
                      <Option value="0">系统级</Option>
                      <Option value="1">项目级</Option>
                    </Select>
                  </FormBinder>
                  <div style={styles.formErrorWrapper}>
                    <FormError name="dictType" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col offset="3">
                  <Button
                    onClick={this.handleSubmit}
                    type="primary"
                    size="large"
                  >
                    确认
                  </Button>
                </Col>
              </Row>
            </div>
          </FormBinderWrapper>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  formTitle: {
    margin: '0 0 20px',
    paddingBottom: '10px',
    borderBottom: '1px solid #eee',
  },
  formLabel: {
    textAlign: 'right',
    lineHeight: '1.7rem',
    paddingRight: '10px',
  },
  formRow: {
    marginBottom: '20px',
  },
  formErrorWrapper: {
    marginTop: '5px',
  },
  simpleFluencyForm: {},
};
