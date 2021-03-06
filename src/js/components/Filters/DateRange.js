import React from 'react';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {connect} from 'react-redux';
import {changeDateRange} from '../../actions';

class DateRange extends React.Component {
	handleDayClick = day => {
		const { changeDateRange, range} = this.props;
		changeDateRange(DateUtils.addDayToRange(day, range));
	}

	render() {
		const {from, to} = this.props.range;
		const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;
		return(
			<div className='date-range'>
				<DayPicker
					selectedDays={day => DateUtils.isDayInRange(day, {from, to})}
					onDayClick={this.handleDayClick} />
				{selectedRange}	
			</div>
			);
	}
}

export default connect(state => ({range: state.filters.dateRange}), {changeDateRange})(DateRange);