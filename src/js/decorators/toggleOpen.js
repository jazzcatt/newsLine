import React from 'react';

export default (Component) => class ToggleDecorator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		}
	}
	toggleOpen = e => {
		this.setState({isOpen: !this.state.isOpen});
	}
	render() {
		return(
			<Component {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
			);
	}
}