import React from 'react'

const Story = ({ story = {} }) => {
	const { user_thumb, user_name } = story;

	return (
		<a href={`/${user_name}`} className="stories__item stories__item--active">
			<img className="stories__img" src={user_thumb} alt={user_name}/>
		</a>
	)
};

export default Story;
