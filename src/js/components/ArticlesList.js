import React from 'react';
import Article from './article';
import accordeon from '../decorators/accordeon';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class ArticlesList extends React.Component {
	static propTypes = {
		articles: PropTypes.array.isRequired

	}

	render() {
		const {openArticleId, toggleOpen} = this.props;
		const list = this.props.articles.map((article) => {
			return <li key={article.id}><Article article={article} 
			 isOpen = {openArticleId == article.id} toggleOpen={toggleOpen(article.id)}/></li>
		});
		return(
			<ul>{list}</ul>
			);
	}
}

export default connect(({articles}) => ({articles}) )(accordeon(ArticlesList));