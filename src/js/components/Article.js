import React from 'react';
import CommentsList from './Commentslist';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';
import {deleteArticle} from '../actions';
import {connect} from 'react-redux';

 class Article extends React.Component {
	static propTypes = {
			article: PropTypes.shape({
			title: PropTypes.string,
			text: PropTypes.string
		})
	}
	getBody(text, isOpen, comments) {
		return  (
				<section>
					<p>{text}</p>
					<CommentsList comments={comments}  ref={this.setCommentRef}/>
				</section>
			);
	}
	setCommentRef = ref => {

	}
	setContainerRef = ref => {
		this.container = ref;
	}
	handleDelete = () => {
		this.props.deleteArticle(this.props.article.id);
		console.log('---- delete');
	}
	render() {
		const {title, text, comments, date} = this.props.article;
		const {isOpen} = this.props;
		return(
			<article ref={this.setContainerRef}>
				<section>
					<h3>{title}</h3>
					<button onClick={this.props.toggleOpen}>{isOpen ? 'Close': 'Open'}</button>
					<button onClick={this.handleDelete}>Delete</button>
				</section>
					{isOpen ? this.getBody(text, isOpen, comments) : null}
			</article>
		);
	}
}

export default connect(null, {deleteArticle})(Article);