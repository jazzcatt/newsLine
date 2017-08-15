import {createSelector} from 'reselect';
const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles;
const idGetter = (state, props) => props.id;
const commentsGetter = state => state.comments;

export const filtrateArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
	const {selected, dateRange:{from, to}} = filters;
	return articles.filter(article =>{
		const publishedDate = Date.parse(article.date);
		return (!selected.length || selected.includes(article.id)) &&
			(!from || !to  || (publishedDate > from && publishedDate < to));
	});

});


export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
	return comments.find(comment => comment.id === id);
});