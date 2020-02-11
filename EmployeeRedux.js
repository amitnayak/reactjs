import React, {Component} from 'react';
import {connect} from 'react-redux';

class EmployeeRedux extends Component {
	render() {
		return(
			<div> 
				<div>EmployeeRedux </div>
				<div>{this.props.user.name}</div>
				<button onClick={() => this.props.setName("Rajesh")} > Change Name </button>

				<div>{this.props.math.result}</div>
				<button onClick= {() => this.props.updateResult(5)} > ADD NUM </button>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		user:state.user,
		math:state.math
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		setName: (name) => {
			dispatch({
				type: "SETNAME",
				payload:name
			})
		},
		updateResult : (num) => {
			dispatch({
				type: "ADD",
				payload:num
			})
		}
	}
}

export default connect (mapStateToProps, mapDispatchToProps)(EmployeeRedux)
