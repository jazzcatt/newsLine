import {normalizedComments as comments} from '../fixtures';

export default (commentState = comments, action) => {
	const {type, payload} = action;
	
	return commentState;
}