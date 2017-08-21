import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="head">
        <img className="img_head" src={require('../img/logo.png')} alt="随求logo图标"/>
        <ul className="nav_top">
          <li><a href="">交易</a></li>
          <li><a href="">ICO</a></li>
        </ul>
        <ul className="nav_right">
          <li><a href="">QQ登陆</a></li>
          <li><a href="">邮箱登陆/注册</a></li>
          <li><a href=""><img src={require("../img/group.png")} alt="随求用户群" title="随求用户群"/> </a></li>
        </ul>
      </div>
    );
  }
}

export default Header;
