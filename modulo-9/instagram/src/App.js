import React from 'react';
import './index.css';

import { useSelector, useDispatch } from 'react-redux';

import { setLike } from './actions';

import Post from './components/Post';
import Story from '././components/Story';
import Header from './components/Header';

function App() {
  const { stories, posts } = useSelector( state => state );
  const dispatch = useDispatch();

  const handleLike = (id) => {
    dispatch(setLike(id));
  }

  return (
    <div>
      <Header />
      
      <section className="stories">
        <div className="container">
          <div className="stories__list">
            {stories.map(story => (
              <Story key={story.id} story={story}/>
            ))}
          </div>
        </div>
      </section>

      <main className="main__post">
        <div className="container">
          {posts.map(post => (
            <Post key={post.id} post={post} onClickLike={handleLike}/>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
