
import React, {Component} from 'react';
import Company from './Company';


class ApplicationRedux extends Component {

	state = {
		EmployeeName:'Amit Nayak'
	}

	render() {

		return (
			<div>
				<Company />
			</div>
		)
	}
}

export default ApplicationRedux;