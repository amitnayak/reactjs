
import React, {Component} from 'react';
import Company from './Company';


export const NameContext = React.createContext();
export const LocationContext = React.createContext();


class Application extends Component {

	state = {
		EmployeeName:'Amit Nayak'
	}

	render() {

		return (
			<div>
				<NameContext.Provider value={this.state.EmployeeName} >
					<LocationContext.Provider value ={'Pune'}>
						<Company />
					</LocationContext.Provider>
				</NameContext.Provider>
				</NameContext.Provider>

			</div>
		)
	}
}

export default Application;