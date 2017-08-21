import React, { Component } from 'react';

class Header extends Component {
  render() {
    let dl={height:'318px',width:'236px',backgroundColor:'#fff',float:'left',margin:'0 25px'};
    let dd={width:'236px',textAlign:'center',position:'relative',top:'100px',fontSize:'14px'};
    let span={fontSize:'1em',color:'#BABABA'};
    let a={marginLeft: '2em',
    color: '#808080',textDecoration: 'underline',fontSize:'1em'};
    return (
        <div>
      <div className="footer">
       <div className="foot_center">
         <h5>我们致力于为广大数字货币、区块链支持者提供一个透明、安全、公平、可信的交易服务平台</h5>
         <div className="foot_t">
           <dl style={dl}>
             <dt><img src={require('../img/pic4.png')} alt=""/></dt>
             <dd style={dd}>透明</dd>
           </dl>
           <dl style={dl}>
             <dt><img src={require('../img/pic5.png')} alt=""/></dt>
             <dd style={dd}>安全</dd>
           </dl>
           <dl style={dl}>
             <dt><img src={require('../img/pic6.png')} alt=""/></dt>
             <dd style={dd}>公平</dd>
           </dl>
           <dl style={dl}>
             <dt><img src={require('../img/pic7.png')} alt=""/></dt>
             <dd style={dd}>可信</dd>
           </dl>
         </div>
       </div>
      </div>
      <footer className="foot_container">
        <div className="foot_con">
          <div className="xian"></div>
        <span style={span}>
        2017 © CHAO BI.LA 沪ICP备17023441号.
  </span>
    <a style={a} href="" target="_blank">用户协议</a>
    <a href="" target="_blank">隐私条款</a>

  </div>

  </footer>
        </div>
    );
  }
}

export default Header;
