import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Button from './buttons/Button'
import DangerButton from './buttons/DangerButton'

class HelloMessage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: 'simple'
    };
  }

  componentDidMount() {
    this.setState({name: 'mounted'});
  }

  render() {
    return (
        <div>
        <h1>Hello {this.props.name}
        {this.state.name} {JSON.stringify(this.context)}</h1>
            <ul>
            {['first', 'second'].map((item) =>(
                <li>{item}</li>
            ))}
            </ul>
        </div>
    )
  }
}
const element = (
  <div>
    <HelloMessage name="H1"/>
    <HelloMessage name="H2"/>
    <Button text="OK"/>
    <DangerButton text="BAD"/>
  </div>
);
ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();