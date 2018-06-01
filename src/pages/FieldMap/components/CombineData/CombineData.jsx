import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import PrivateDataForm from '../../components/PrivateDataForm';
import { Grid, Button, Table } from '@icedesign/base';
import './CombineData.scss';
import IceLabel  from '@icedesign/label';


const  { Row, Col } = Grid;

export default class CombineData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isZebra:true
    };
  }

    render(){
        return (
            <div className="" style={styles.container}>
                <Row wrap gutter="20">
                    <Col xxs="24" s="12" l="12">
                    <IceContainer style={styles.cardContainer}>
                        <PrivateDataForm />
                    </IceContainer>
                    </Col>
                    <Col xxs="24" s="12" l="12">
                    <IceContainer style={styles.cardContainer}>
                        <PrivateDataForm />
                    </IceContainer>
                    </Col>
                </Row>
                <IceContainer>
                {/* <IceLabel status="primary" style={styles.fs16}>合成数据</IceLabel> */}
                <Button type="primary" style={styles.mb20}>合成数据</Button>&nbsp;&nbsp;
                <Button type="primary" style={styles.mb20}>全部匹配数据</Button>
                <Table dataSource={[{index:1,value:'{dsafaffafafl:fdsfwef,fsafsfd:gdgdgd}'}]} primaryKey="key" isZebra={this.state.isZebra}>
                  <Table.Column title="序号" dataIndex="index" lock width={55} align='center'/>
                  <Table.Column title="json" dataIndex="value" />
                </Table>
                </IceContainer>
            </div>
        );
    }
}

const styles = {
    cardContainer: {
      overflowY: 'auto',
    },
    fs16:{
      fontSize:'16px',
    },
    mb20:{
      marginBottom:'20px',
    }
  };

