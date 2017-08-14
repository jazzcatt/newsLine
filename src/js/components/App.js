import React, {Component} from 'react';
import ArticlesList from './ArticlesList';
import CommentForm from './CommentForm';
import Filters from './Filters';

export default class App extends Component {
	state = {
		selection: null
	}
	changeSelection = selection => {this.setState({selection}); console.log(selection)};
	render() {
		const options = this.props.articles.map(article => ({
			label: article.title,
			value: article.id
		}));
		return (
			<div>
				<Filters articles={this.props.articles}/>
				<CommentForm />
				<ArticlesList articles={this.props.articles}/>
			</div>
			);
	}
}