import React, { Component } from 'react';
import IceIcon from '@icedesign/icon';
import { Feedback } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import CopyToClipboard from 'react-copy-to-clipboard';
import './iconDemo.scss';

function onCopy() {
  Feedback.toast.success('复制成功！');
}

export default class BasicNotFound extends Component{
  render (){
    return (
    <IceContainer>
      <div className="cell"><IceIcon size="large" type="redpacket" /><CopyToClipboard text="redpacket" onCopy={onCopy}><span>redpacket</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="coupons" /><CopyToClipboard text="coupons" onCopy={onCopy}><span>coupons</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="shopcar" /><CopyToClipboard text="shopcar" onCopy={onCopy}><span>shopcar</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="qrcode" /><CopyToClipboard text="qrcode" onCopy={onCopy}><span>qrcode</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="link" /><CopyToClipboard text="link" onCopy={onCopy}><span>link</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="angle-down" /><CopyToClipboard text="angle-down" onCopy={onCopy}><span>angle-down</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="edit" /><CopyToClipboard text="edit" onCopy={onCopy}><span>edit</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="cross" /><CopyToClipboard text="cross" onCopy={onCopy}><span>cross</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="clock" /><CopyToClipboard text="clock" onCopy={onCopy}><span>clock</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="exchange" /><CopyToClipboard text="exchange" onCopy={onCopy}><span>exchange</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="delete" /><CopyToClipboard text="delete" onCopy={onCopy}><span>delete</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="angle-up" /><CopyToClipboard text="angle-up" onCopy={onCopy}><span>angle-up</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="speaker" /><CopyToClipboard text="speaker" onCopy={onCopy}><span>speaker</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="down" /><CopyToClipboard text="down" onCopy={onCopy}><span>down</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="backward" /><CopyToClipboard text="backward" onCopy={onCopy}><span>backward</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="forward" /><CopyToClipboard text="forward" onCopy={onCopy}><span>forward</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="bold" /><CopyToClipboard text="bold" onCopy={onCopy}><span>bold</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="background-color" /><CopyToClipboard text="background-color" onCopy={onCopy}><span>background-color</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="font-color" /><CopyToClipboard text="font-color" onCopy={onCopy}><span>font-color</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="underline" /><CopyToClipboard text="underline" onCopy={onCopy}><span>underline</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="italics" /><CopyToClipboard text="italics" onCopy={onCopy}><span>italics</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="font-size" /><CopyToClipboard text="font-size" onCopy={onCopy}><span>font-size</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="ol-list" /><CopyToClipboard text="ol-list" onCopy={onCopy}><span>ol-list</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="align-center" /><CopyToClipboard text="align-center" onCopy={onCopy}><span>align-center</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="align-flex" /><CopyToClipboard text="align-flex" onCopy={onCopy}><span>align-flex</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="float-full" /><CopyToClipboard text="float-full" onCopy={onCopy}><span>float-full</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="float-left" /><CopyToClipboard text="float-left" onCopy={onCopy}><span>float-left</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="quote" /><CopyToClipboard text="quote" onCopy={onCopy}><span>quote</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="align-right" /><CopyToClipboard text="align-right" onCopy={onCopy}><span>align-right</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="align-left" /><CopyToClipboard text="align-left" onCopy={onCopy}><span>align-left</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="ul-list" /><CopyToClipboard text="ul-list" onCopy={onCopy}><span>ul-list</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="store" /><CopyToClipboard text="store" onCopy={onCopy}><span>store</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="topic" /><CopyToClipboard text="topic" onCopy={onCopy}><span>topic</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="anchor" /><CopyToClipboard text="anchor" onCopy={onCopy}><span>anchor</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="video" /><CopyToClipboard text="video" onCopy={onCopy}><span>video</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="sucai" /><CopyToClipboard text="sucai" onCopy={onCopy}><span>sucai</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="picture" /><CopyToClipboard text="picture" onCopy={onCopy}><span>picture</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="gif" /><CopyToClipboard text="gif" onCopy={onCopy}><span>gif</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="guanbi" /><CopyToClipboard text="guanbi" onCopy={onCopy}><span>guanbi</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="bell" /><CopyToClipboard text="bell" onCopy={onCopy}><span>bell</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="compass" /><CopyToClipboard text="compass" onCopy={onCopy}><span>compass</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="task" /><CopyToClipboard text="task" onCopy={onCopy}><span>task</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="person" /><CopyToClipboard text="person" onCopy={onCopy}><span>person</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="chart" /><CopyToClipboard text="chart" onCopy={onCopy}><span>chart</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="key" /><CopyToClipboard text="key" onCopy={onCopy}><span>key</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="question" /><CopyToClipboard text="question" onCopy={onCopy}><span>question</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="correct" /><CopyToClipboard text="correct" onCopy={onCopy}><span>correct</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="home" /><CopyToClipboard text="home" onCopy={onCopy}><span>home</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="fans" /><CopyToClipboard text="fans" onCopy={onCopy}><span>fans</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="horn" /><CopyToClipboard text="horn" onCopy={onCopy}><span>horn</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="rmb" /><CopyToClipboard text="rmb" onCopy={onCopy}><span>rmb</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="message" /><CopyToClipboard text="message" onCopy={onCopy}><span>message</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="search" /><CopyToClipboard text="search" onCopy={onCopy}><span>search</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="question2" /><CopyToClipboard text="question2" onCopy={onCopy}><span>question2</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="fans2" /><CopyToClipboard text="fans2" onCopy={onCopy}><span>fans2</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="shop" /><CopyToClipboard text="shop" onCopy={onCopy}><span>shop</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="attachment" /><CopyToClipboard text="attachment" onCopy={onCopy}><span>attachment</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="eye" /><CopyToClipboard text="eye" onCopy={onCopy}><span>eye</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="phone" /><CopyToClipboard text="phone" onCopy={onCopy}><span>phone</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="location" /><CopyToClipboard text="location" onCopy={onCopy}><span>location</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="publish" /><CopyToClipboard text="publish" onCopy={onCopy}><span>publish</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="light" /><CopyToClipboard text="light" onCopy={onCopy}><span>light</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="content" /><CopyToClipboard text="content" onCopy={onCopy}><span>content</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="edit2" /><CopyToClipboard text="edit2" onCopy={onCopy}><span>edit2</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="lock" /><CopyToClipboard text="lock" onCopy={onCopy}><span>lock</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="hourglass" /><CopyToClipboard text="hourglass" onCopy={onCopy}><span>hourglass</span></CopyToClipboard></div>

      <div className="cell"><IceIcon size="large" type="transfer-right" /><CopyToClipboard text="transfer-right" onCopy={onCopy}><span>transfer-right</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="transfer-left" /><CopyToClipboard text="transfer-left" onCopy={onCopy}><span>transfer-left</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="code" /><CopyToClipboard text="code" onCopy={onCopy}><span>code</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="menu" /><CopyToClipboard text="menu" onCopy={onCopy}><span>menu</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="collapse" /><CopyToClipboard text="collapse" onCopy={onCopy}><span>collapse</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="activity" /><CopyToClipboard text="activity" onCopy={onCopy}><span>activity</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="repair" /><CopyToClipboard text="repair" onCopy={onCopy}><span>repair</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="mail" /><CopyToClipboard text="mail" onCopy={onCopy}><span>mail</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="creative" /><CopyToClipboard text="creative" onCopy={onCopy}><span>creative</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="copy" /><CopyToClipboard text="copy" onCopy={onCopy}><span>copy</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="home2" /><CopyToClipboard text="home2" onCopy={onCopy}><span>home2</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="cascades" /><CopyToClipboard text="cascades" onCopy={onCopy}><span>cascades</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="notice" /><CopyToClipboard text="notice" onCopy={onCopy}><span>notice</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="customize" /><CopyToClipboard text="customize" onCopy={onCopy}><span>customize</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="directory" /><CopyToClipboard text="directory" onCopy={onCopy}><span>directory</span></CopyToClipboard></div>

      <div className="cell"><IceIcon size="large" type="image" /><CopyToClipboard text="image" onCopy={onCopy}><span>image</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="quote2" /><CopyToClipboard text="quote2" onCopy={onCopy}><span>quote2</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="gif2" /><CopyToClipboard text="gif2" onCopy={onCopy}><span>gif2</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="pin" /><CopyToClipboard text="pin" onCopy={onCopy}><span>pin</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="video2" /><CopyToClipboard text="video2" onCopy={onCopy}><span>video2</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="item" /><CopyToClipboard text="item" onCopy={onCopy}><span>item</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="material" /><CopyToClipboard text="material" onCopy={onCopy}><span>material</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="skin" /><CopyToClipboard text="skin" onCopy={onCopy}><span>skin</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="requ" /><CopyToClipboard text="requ" onCopy={onCopy}><span>requ</span></CopyToClipboard></div>
      <div className="cell"><IceIcon size="large" type="yonghu" /><CopyToClipboard text="requ" onCopy={onCopy}><span>yonghu</span></CopyToClipboard></div>

    </IceContainer>
)
  }
}

