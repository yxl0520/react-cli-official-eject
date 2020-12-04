import React, { Component } from 'react'
import TitleBar from '@/components/titleBar'

import styleLess from './style.less' // 导入less，模块化处理
import './style.common.less' // 非模块化

import './style.scss'
import styleSass from './style.module.scss'
// console.log(styleSass)

import styleCss from './style.css'

export default class StyleModule extends Component {

  render() {
    return (
      <div>
        <TitleBar title="样式模块化" />
        {/* 1. LESS语言处理 */}
        <div className={`box use-less ${styleLess['box-wrapper']}`}>
          <h2 className="sub-title">
            1. 使用less预处理语言:less模块化方式引入
          </h2>
          <div className="desc">
            <p className="note">
              【1】项目中引入<span> .less </span>
              后缀的文件，默认会通过模块化方式引入，此时，存在两种方式使的样式生效
            </p>
            <p className="demo global-demo">
              方式一：使用<span>:global</span>语法
            </p>
            <p className={`demo ${styleLess.className}`}>
              方式二：使用<span>Object.className</span>方式
            </p>
            <p className="note">
              【2】如果不想模块化方式引入less，则请使用
              <span> .common.less </span>
              为后缀的文件名
            </p>
            <p className="not-module">本字体颜色由“非模块化方式的class”控制</p>
          </div>
        </div>
        {/* 2. SASS语言处理 */}
        <div className={`box use-sass ${styleSass['box-wrapper']}`}>
          <h2 className="sub-title">2. 使用sass预处理语言:（模块化方式）</h2>
          <div className="desc">
            <p className="note">
              【1】项目中支持引入<span> .scss </span>
              后缀的文件
              <br />
              【2】如果需要模块化方式引入scss，则请使用
              <span> .module.scss </span>
              为后缀的文件名
            </p>
          </div>
        </div>
        {/* 3. CSS语言的模块化引入 */}
        <div className={`box use-css ${styleCss['box-wrapper']}`}>
          <h2 className="sub-title">3. 使用Css预处理语言:（模块化方式）</h2>
          <div className="desc">
            <p className="note">
              【1】css文件已配置成module方式引入
            </p>
          </div>
        </div>
      </div>
    )  
  }
}
