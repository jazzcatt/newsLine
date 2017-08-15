import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { connect } from 'react-redux';
import {changeSelected} from '../../actions';

class SelectFilter extends React.Component {
	static propTypes = {
		articles: PropTypes.array.isRequired
	}
	handleChange = selected => {this.props.changeSelected(selected.map(option => option.value));  console.log(this.props.selected)};
	render() {
		const options = this.props.articles.map(article => ({
			label: article.title,
			value: article.id
		}));
		return (
			<Select 
			options={options}
			value = {this.props.selected}
			onChange = {this.handleChange}
			multi
			/>
			);
	}
} 


export default connect(state => ({articles: state.articles, selected: state.filters.selected}),{changeSelected})(SelectFilter);
