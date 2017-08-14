import React from 'react';

export default (Component) => class Accordeon extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			openArticleId: null
		}
	}
	toggleOpen = id => ev => {
		this.setState({openArticleId: id === this.state.openArticleId ? null : id });
	}
	render() {
		return(
			< Component {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
			);
	}
}