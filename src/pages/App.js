import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Test from './Test';
import '../css/head.css';
import '../css/app.css';
import '../css/test.css';
import '../css/footer.css';

class App extends Component {
/*constructor(props) {
 super(props);
 this.state = {
 test: '定义statehell明明'
 }
 }*/
  render() {
    return (
      <div className="App">
        {/*this.state.test*/}
        <Header />
        <Test />
        <Footer />
      </div>
    );
  }
}

export default App;
