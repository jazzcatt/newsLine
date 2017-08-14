import React from 'react';
import SelectFilter from './Select';
import DateRange from './DateRange';
import {connect} from 'react-redux';

class Filters extends React.Component {
	render() {
		return(
			<div>
				<DateRange />
				<SelectFilter articles={this.props.articles}/>
			</div>
		);
	}
}

export default connect( ({articles}) => ({articles}) )(Filters);