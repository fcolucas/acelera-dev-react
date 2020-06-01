import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState(false);
  const [selectStory, setSelectStory] = useState({});
  const [selectProfile, setSelectProfile] = useState({});

  const findStoryById = id => stories.find(story => story.id === id);

  const handleStory = story => {
    setSelectProfile(getUserHandler(story.userId));
    setSelectStory(findStoryById(story.id));
    setShowStory(!showStory);
  }
  
  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories.map((story, index) => {
            const profile = getUserHandler(story.userId);

            return (
              <button
                key={story.id}
                onClick={() => handleStory(story)}
                className={`user__thumb ${!index && 'user__thumb--hasNew'}`}
                >
                  <div className="user__thumb__wrapper">
                    <img src={profile.avatar} alt={profile.name} />
                  </div>
              </button>
            )
          })}
        </div>
      </section>

      {showStory && (
        <Story 
          story={selectStory}
          user={selectProfile}
          handleClose={() => setShowStory(!showStory)}
        />
        )}
    </React.Fragment>
  );
};

export default Stories;
