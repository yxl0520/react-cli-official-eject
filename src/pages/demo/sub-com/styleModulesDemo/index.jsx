import React, { Component } from 'react'
import TitleBar from '@/components/titleBar'

import styleLess from './style.less' // 导入less，模块化处理
import './style.common.less' // 非模块化

import './style.scss'
import styleSass from './style.module.scss' // 模块化导入scss
// console.log(styleSass)

// import styleCss from './style.css'
import './style.css' // css文件已改成非模块化导入，为了反之导入第三方css样式文件时有冲突

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
              <br />
              【3】scss编译后，样式文件名如：
              <span>.style_box-wrapper__2XQ4H h2</span>，会覆盖
              <span style={{ color: 'rgb(38, 206, 248)' }}>style.scss文件</span>
              内的样式
            </p>
          </div>
        </div>
        {/* 3. CSS语言的模块化引入 */}
        <div className={`box use-css box-wrapper`}>
          <h2 className="sub-title">3. 使用CSS:（改为非模块化导入方式）</h2>
          <div className="desc">
            <p className="note">
              【1】css文件已修改为配置成非module方式引入
              <br />
              【2】项目开发过程中，我们有可能会引入第三方插件的样式文件，它们通常采用
              <span>.css</span>
              为后缀，为了不引起冲突，推荐开发时，自己使用<span>less</span>或
              <span>sacc</span>语言开发，并启用模块化。
            </p>
          </div>
        </div>
      </div>
    )
  }
}
