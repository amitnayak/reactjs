import React, {useContext} from 'react';
import {NameContext, LocationContext} from './Application';

function EmployeeHook() {
	const name = useContext(NameContext);
	const loc = useContext(LocationContext);

	return(
		<div> {name}  {loc} </div>
	)
}

export default EmployeeHook;