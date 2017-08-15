import React from 'react';
import SelectFilter from './Select';
import DateRange from './DateRange';
import {connect} from 'react-redux';

export default class Filters extends React.Component {
	render() {
		return(
			<div>
				<DateRange />
				<SelectFilter />
			</div>
		);
	}
}
