import React from 'react';

export default function Comment (props) {
	const {user, text} = props.comment;
	return (
		<section>
			<h4>{user}</h4>
			<p>{text}</p>
		</section>
		);
}