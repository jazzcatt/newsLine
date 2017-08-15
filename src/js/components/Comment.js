import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {commentSelectorFactory} from '../selectors';

 function Comment (props) {
	const {user, text} = props.comment;
	return (
		<section>
			<h4>{user}</h4>
			<p>{text}</p>
		</section>
		);
}

Comment.propTypes = {
	id: PropTypes.string.isRequired,
	comment: PropTypes.shape({
		text: PropTypes.string.isRequired,
		user: PropTypes.string.isRequired
	}).isRequired
}

const mapStateToProps = () => {
	const commentsSelector = commentSelectorFactory();
	return (state, ownProps) => ({
		comment: commentsSelector(state, ownProps)
	});
}
export default connect(mapStateToProps)(Comment);