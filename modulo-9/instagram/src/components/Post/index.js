import React from 'react'; 

const Post = ({ post = {}, onClickLike }) => {
	const {
		id,
		name,
		user_thumb,
		user_name,
		post_figure,
		like_number,
		show_like,
		liked
	} = post;
	
	return (
		<section className="main__card">
			<div className="main__card-header">
				<div className="main__card-profile">
					<a href={`/${user_name}`} > 
						<img className="main__card-profile-img" src={user_thumb} alt={name}/>
					</a>
					<a href={`/${user_name}`} className="main__card-profile-user">{user_name}</a>
				</div>

				<button className="main__card-options">
						<i className="fas fa-ellipsis-h"></i>
				</button>
			</div>

			<figure className="main__card-post">
					<img className="main__card-post-img" src={post_figure} alt={name} />
			</figure>
			
			<div className="main__card-controls">
					<button className="main__card-button" onClick={() => onClickLike(id)}>
							<i className={`${liked ? 'fas' : 'far'} fa-heart`} ></i>
					</button>

					<button className="main__card-button">
							<i className="far fa-comment"></i>
					</button>
					
					<button className="main__card-button">
							<i className="far fa-bookmark"></i>
					</button>
			</div>

			<div className="main__card-likes">
					<img className="main__card-like-img" src={show_like.user_thumb} alt={show_like.user_name} />
					
					<span>
						curtido por <a href={`/${show_like.user_name}`} className="main__card-user-like">{show_like.user_name}</a> e outras <a href="/" className="main__card-user-like">
							{`${like_number} pessoas`}</a>
					</span>
			</div>
		</section>
	);
};

export default Post;