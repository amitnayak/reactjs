/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Application from './Application';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Application />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

*/

import {createStore, combineReducers, applyMiddleware} from 'redux';

/*const reducer = (state, action) => {
	switch(action.type){
		case "ADD":
			state = state + action.payload
			break;
		case "SUB":
			state = state - action.payload;
			break


	}
	return state;

}

const store = createStore(reducer, 1);*/



/******************************

const initState ={
	result:1,
	lastValue:[]
}
const reducer = (state = initState, action) => {
	switch(action.type){
		case "ADD":
			state.result = state.result + action.payload
			break;
		case "SUB":
			state.result = state.result - action.payload;
			break


	}
	return state;

}
const store = createStore(reducer);
**************************************/
// multiple reducers

const mathReducer = (state = {result:1, lastValue:[]}, action) => {
	switch(action.type){
		case "ADD":
			state.result = state.result + action.payload
			break;
		case "SUB":
			state.result = state.result - action.payload;
			break


	}
	return state;

}

const userReducer = (state = {name:'Amit', age:20}, action) => {
	switch(action.type){
		case "SETNAME":
			state.name = action.payload
			break;
		case "SETAGE":
			state.age = action.payload;
			break


	}
	return state;

}

const loggerMiddleware = (store) => (next) => (action) => {
	console.log("Logged Action " + action);
	next(action);
}

const store = createStore(combineReducers({mathReducer,userReducer}), {}, applyMiddleware(loggerMiddleware));

store.subscribe(() => {
	console.log("store updated"+store.getState().mathReducer.result +" :: "+store.getState().userReducer.name +" :: "+store.getState().userReducer.age);
})
store.dispatch({type:"ADD",payload: 100});
store.dispatch({type:"SUB",payload: 10});
store.dispatch({type:"ADD",payload: 30});
store.dispatch({type:"SETAGE",payload: 38});
store.dispatch({type:"SETNAME",payload: 'Amit Nayak'});

