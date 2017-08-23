import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome(props) {
  return  <h1> Welcome {props.name}</h1>;
}

function InputName(props) {
  return (
    <div className="i">
      <input type="text" className="i-text" placeholder={props.placeholder}/>
    </div>
  );
}

/**
 * Компонент
 */


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), name: 'Home', controlDate: new Date('2017-10-15')};
  }
  
  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.timerId);
  }


  tick() {
    this.setState({date: new Date()});
  }

  _textChange(ev) {
    this.setState({name: ev.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. Now time is&nbsp;
          Время до {this.state.controlDate.toLocaleDateString()}&nbsp;
          {(this.state.controlDate - this.state.date)}&nbsp;
          {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}&nbsp;
          {this.state.name}
          <InputName placeholder='Введите свое имя'/>
          <Welcome name='hello'/>
        </p>
      </div>
    );
  }
}

export default App;