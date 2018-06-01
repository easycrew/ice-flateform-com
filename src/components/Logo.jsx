import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import IceImg from '@icedesign/img';

export default class Logo extends PureComponent {
  render() {
    return (
      <div className="logo">
        <Link to="/" className="logo-text">
          <IceImg
              src={require('public/images/logo_.png')}
            />
        </Link>
      </div>
    );
  }
}
