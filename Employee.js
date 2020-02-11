import React, {Component} from 'react';

import {NameContext, LocationContext} from './Application';


class Employee extends Component {

	render(){

		return (
			<div>
				<NameContext.Consumer>
					{
						name => {
							return <div> {name} </div>
						}
					}
				</NameContext.Consumer>
			</div>
		)

/*		return(
			<div> 				
				<NameContext.Consumer>
					{
					 	name => { 
					 			return (
					 				<LocationContext.Consumer>
					 					{
					 						loc => {
					 							return <div> {name} {loc}</div>
					 						}
					 					}
					 				</LocationContext.Consumer>
					 			)

					 	  }
					}
				</NameContext.Consumer>
			</div>
		)*/
	}

}

export default Employee;