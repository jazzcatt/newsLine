import React from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';


class CommentsList extends React.Component {
	render() {
		const comments = this.props.comments.map(id => {
			return <li key={id}><Comment id={id} /></li>
		});
		const {isOpen, toggleOpen} = this.props;
		return(
			<section>
				<button onClick={toggleOpen}>{isOpen?'Close':'Open'} Comments</button>
				<ol>{isOpen ? comments : null}</ol>
			</section>	
			);
	}
}

export default toggleOpen(CommentsList);