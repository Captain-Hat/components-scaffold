import React, { Component } from 'react';
import logo from './logo.svg';
import style from './App.less';
// import _ from 'lodash';//推荐数组对象处理尽量使用lodash 
import { Button } from 'antd'
class App extends Component {
  render() {
    return (
      <div className={style["App"]}>
        <header className={style["App-header"]}>
          <img src={logo} className={style["App-logo"]} alt="logo" />
          <h1 className={style["App-title"]}>Welcome to React</h1>
        </header>
        <p className={style["App-intro"]}>
          <Button type="primary" className={style["button"]}>To get started, edit <code>src/App.js</code> and save to reload.</Button>
        </p>
      </div>
    );
  }
}

export default App;
