import {normalizedComments as comments} from '../fixtures';

const commentsMap = comments.reduce((acc, comment) => {
	acc[comment.id] = comment;
	return acc;
}, {});

export default (commentState = commentsMap, action) => {
	const {type, payload} = action;
	
	return commentState;
}