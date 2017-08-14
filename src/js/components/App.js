import React, {Component} from 'react';
import ArticlesList from './ArticlesList';
import CommentForm from './CommentForm';
import Filters from './Filters';


export default class App extends Component {
	render() {
		return (
			<div>
				<Filters />
				<CommentForm />
				<ArticlesList />
			</div>
			);
	}
}
