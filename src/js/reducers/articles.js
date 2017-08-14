import {articles} from '../fixtures';
import {DELETE_ARTICLE} from '../constants';

export default (articleState = articles, action) => {
	switch(action.type) {
		case DELETE_ARTICLE: return articleState.filter(article => article.id != action.payload.id);
	}
	return articleState;
}
