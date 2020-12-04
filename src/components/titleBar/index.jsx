import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.less'

class TitleBar extends Component {
  render() {
    return (
      <div>
        <div className={style['title-bar']}>
          <h1 className="title">{this.props.title || '标题'}</h1>
        </div>
      </div>
    )
  }
}

TitleBar.propTypes = {
  title: PropTypes.string
};

export default TitleBar;