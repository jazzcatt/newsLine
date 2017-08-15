import {createSelector} from 'reselect';
const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles;



export const filtrateArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
	const {selected, dateRange:{from, to}} = filters;
	return articles.filter(article =>{
		const publishedDate = Date.parse(article.date);
		return (!selected.length || selected.includes(article.id)) &&
			(!from || !to  || (publishedDate > from && publishedDate < to));
	});

});