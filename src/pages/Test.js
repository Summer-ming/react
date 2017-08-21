import React, { Component } from 'react';

class Test extends Component {
  render() {
    /*定义一些公共的样式去使用*/
    let style1= {display:'inlineBlock',height:'121px',lineHeight:'121px'};
    let img1={display:'inlineBlock',height:'14px',width:'14px',position:'relative',top:'0px', left:'8px',borderRadius: 0};
    let dl={height:'94px',width:'585px',float:'left'};
    let dt={float:'left',height:'80px',width:'80px'};
    let dd={float:'right',height:"94px"};
    let p={width:'340px',height:'51px',fontSize:'0.9em',color: '#808080'};
    return (
        <div>
          <div className="section">
            <div className="section_center">
              <a href="">公告:</a>
              <a href="">关于IOTA的上线报告</a>
            </div>
          </div>
            <div className="banner">
              <div className="banner_center">
                <a href=""> </a>
                <img src={require("../img/banner4.png")} alt=""/>
                <a href=""> </a>
              </div>
            </div>
          <div className="content">
            <div className="pay">
              <h3>获取比特币</h3>
              <table>
                <tbody>
                <tr>
                  <td>
                    <img src={require('../img/lihualiang.png')} alt=""/>
                    <span style={style1}>李光良</span>
                  </td>
                  <td>
                    <span>支付宝/微信/银行卡</span>
                  </td>
                  <td>
                    微信
                    <span><img style={img1} src={require('../img/微信.png')} alt=""/></span>
                  </td>
                  <td>
                    <span>广州</span>
                  </td>
                  <td>
                    <span>随求交易所股东</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={require('../img/ylp.png')} alt=""/>
                    <span style={style1}>YLP</span>
                  </td>
                  <td>
                    <span>支付宝/微信/银行卡</span>
                  </td>
                  <td>
                    微信
                    <span><img style={img1} src={require('../img/微信.png')} alt=""/></span>
                  </td>
                  <td>
                    <span>深圳</span>
                  </td>
                  <td>
                    <span>随求交易所股东</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={require('../img/yiqi.png')} alt=""/>
                    <span style={style1}>一切皆有可能</span>
                  </td>
                  <td>
                    <span>支付宝/微信/银行卡</span>
                  </td>
                  <td>
                    微信
                    <span><img style={img1} src={require('../img/微信.png')} alt=""/></span>
                  </td>
                  <td>
                    <span>玉溪</span>
                  </td>
                  <td>
                    <span>随求交易所股东</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={require('../img/caicai.png')} alt=""/>
                    <span style={style1}>二蛋</span>
                  </td>
                  <td>
                    <span>支付宝/微信/银行卡</span>
                  </td>
                  <td>
                    微信
                    <span><img style={img1} src={require('../img/微信.png')} alt=""/></span>
                  </td>
                  <td>
                    <span>绵阳</span>
                  </td>
                  <td>
                    <span>随求交易所股东</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={require('../img/wandou.png')} alt=""/>
                    <span style={style1}>豌豆</span>
                  </td>
                  <td>
                    <span>支付宝/微信/银行卡</span>
                  </td>
                  <td>
                    微信
                    <span><img style={img1} src={require('../img/微信.png')} alt=""/></span>
                  </td>
                  <td>
                    <span>沈阳</span>
                  </td>
                  <td>
                    <span>随求交易所股东</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={require('../img/kaka.png')} alt=""/>
                    <span style={style1}>卡卡</span>
                  </td>
                  <td>
                    <span>支付宝/微信/银行卡</span>
                  </td>
                  <td>
                    微信
                    <span><img style={img1} src={require('../img/微信.png')} alt=""/></span>
                  </td>
                  <td>
                    <span>北京</span>
                  </td>
                  <td>
                    <span>随求交易所股东</span>
                  </td>
                </tr>
                </tbody>
              </table>

            </div>

          </div>
          <div className="con_full">
            <div className="con_center">
              <h2>以比特币为基础货币的交易所</h2>
              <div className="con_h" id="first">
                <dl style={dl}>
                  <dt style={dt}><img src={require('../img/pic8.png')} alt=""/></dt>
                  <dd style={dd}>
                    <h4>专业技术团队</h4>
                    <p style={p}>项目孵化于比特天空社群，发起人是区块链技术专家、比特币布道者、全球首款比特币硬件钱包发明者几何级数，团队成员都是处于区块链开发与投资的一线知名人士。
                    </p>
                  </dd>
                </dl>
                <dl style={dl}>
                  <dt style={dt}><img src={require('../img/pic1.png')} alt=""/></dt>
                  <dd style={dd}>
                    <h4>ICO发现培育孵化</h4>
                    <p style={p}>团队严格筛选ICO项目，并提出独创性的估值拍卖法，为用户在token市场中寻找价值黑马</p>
                  </dd>
                </dl>
              </div>
              <div className="con_h" >
                <dl style={dl}>
                  <dt style={dt}><img src={require('../img/pic2.png')} alt=""/></dt>
                  <dd style={dd}>
                    <h4>安全快速的系统</h4>
                    <p style={p}>业内最专业的行情交易系统，为您提供最安全、快速的交易体验。
                    </p>
                  </dd>
                </dl>
                <dl style={dl}>
                  <dt style={dt}><img src={require('../img/pic3.png')} alt=""/></dt>
                  <dd style={dd}>
                    <h4>丰富的投资经验</h4>
                    <p style={p}>通过基金经理全面的交易品种分析，选择低市盈率、穿越牛熊、还是寻找低估低市值交易品种，帮您做出专业的投资参考。</p>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Test;
