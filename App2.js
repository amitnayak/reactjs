import React, { Component } from 'react';
import './App.css';

// first we will create a context
const MyContext = React.createContext();


// then create provider component
class MyProvider extends Component {
  state = {
    name:'Amit',
    age:30,
    cool:true
  }

  render(){
   
    return(
      <MyContext.Provider value={{state:this.state,
        growAYearOlder: () => this.setState({
          age:this.state.age + 1
        })
      }} >
        {this.props.children}
      </MyContext.Provider>
    )
  }

}

const Family = (props) => (
  <div className="family">
    <Person/>

  </div>

)

class Person extends Component {
    render(){

      return (
        <MyProvider>
          <div class="Person">
           <MyContext.Consumer>
              {(context) => (
                <React.Fragment>
                  <p>I am inside {context.state.name}</p>
                   <p>I am inside {context.state.age}</p>
                   <button onClick={context.growAYearOlder} >click me </button>
                </React.Fragment>
              )

            }
           </MyContext.Consumer>

         
          </div>
        </MyProvider>
      )
    }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <p> I am the App </p>
        <Family />
     
      </div>
    );
  }
}

export default App;
