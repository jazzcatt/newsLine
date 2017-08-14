import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class SelectFilter extends React.Component {
	static propTypes = {
		articles: PropTypes.array.isRequired
	}
	state = {
		selected: []
	}
	handleChange = selected => {this.setState({selected},()=>console.log(this.state.selected));  };
	render() {
		const options = this.props.articles.map(article => ({
			label: article.title,
			value: article.id
		}));
		return (
			<Select 
			options={options}
			value = {this.state.selected}
			onChange = {this.handleChange}
			multi
			/>
			);
	}
} 
