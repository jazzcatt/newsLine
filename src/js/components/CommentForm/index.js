import React from 'react';
import '../../../css/index.css';

const limits = {
	user: {
		min: 5,
		max: 15
	},
	text: {
		min: 20,
		max: 50
	}
}
export default class CommentFrom extends React.Component {
	state = {
		user: '',
		text: ''
	}
	handleSubmit = e => {
		e.preventDefault();
		this.setState({
			user: '',
			text: ''
		});
	}
	getClassName = type => {
		return this.state[type].length && this.state[type].length < limits[type].min ? 'form-input-error' : '';
	}
	handleChange = type => e => {
		if(e.target.value.length > limits[type].max) return;
		this.setState({
			[type]: e.target.value
		});
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				user: <input value={this.state.user} 
				className={this.getClassName('user')} 
				onChange = {this.handleChange('user')}>
				</input>
				comment: <input value={this.state.text}  
				className={this.getClassName('text')}
				onChange={this.handleChange('text')}>
				</input>
				<input type='submit' value='submit' />
			</form>
			);
	}
}