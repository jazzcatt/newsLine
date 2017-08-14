import React from 'react';
import SelectFilter from './Select';
import DateRange from './DateRange';


export default class Filters extends React.Component {
	render() {
		return(
			<div>
				<DateRange />
				<SelectFilter articles={this.props.articles}/>
			</div>
		);
	}
}
