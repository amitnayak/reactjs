import React, {Component} from 'react';
import Employee from './Employee';
//import EmployeeHook from './EmployeeHook';
import EmployeeRedux from './EmployeeRedux';

class Department extends Component {

	render() {

		return(
			<div> 
				
				<EmployeeRedux />

			</div>
		)
	}

}

export default Department;