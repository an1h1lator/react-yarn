import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

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
    <HelloMessage name="Anton"/>
    <HelloMessage name="Lena"/>
  </div>
);
ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();