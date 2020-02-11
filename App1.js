import React, { Component } from 'react';
import './App.css';


const Family = (props) => (
  <div className="family">
    <Person name={props.name}/>

  </div>

)

class Person extends Component {
    render(){

      return (
        <div class="Person">
          <p>I am {this.props.name}</p>
        </div>
      )
    }
}

class App extends Component {
  state = {
    name:'Amit',
    age:30,
    cool:true
  }
  render() {
    return (
      <div className="App">
        <p> I am the App </p>
        <Family name={this.state.name} />
      </div>
    );
  }
}

export default App;
