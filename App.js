import React, {Component} from 'react';

const MyContext = React.createContext();

class App extends Component {

	state = {
		color:'No Color'
	}

	render(){

		return(
			<MyContext.Provider value={this.state.color} >
				<button onClick={()=>{this.setState({color:'red color'})}}>click me</button>
				<Child />
			</MyContext.Provider>
		);
	}
}


class Child extends Component {
	render(){
		return(
			<SuperChild />
		);
	}
}

class SuperChild extends Component {

	render(){
		let props = {disabled:true};
		return(
			<MyContext.Consumer>
				
				
				{context => <input type="text" {...props} value={context} />}
				
			</MyContext.Consumer>
		);
	}
}

export default App;
