import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

// criar uma prop q diga se a story é nova ou não

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, toggleStory] = useState(false);

  const storyView = stories.map((story) => {
    return {
      id: story.id,
      hasNew: true
    }
  })

  const [hasNewStory, setHasNewStory] = useState(storyView);

  const isNewStory = (id) => {
    return hasNewStory.filter((story) => story.id  === id)[0].hasNew;
  }

  const storyViewed = (e, storyId) => {
    if(e === false){
      setHasNewStory(isNewStory(storyId))
    }
    return e;
  }

  
  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">

          {stories.map((story) => {
            const user = getUserHandler(story.userId);
            if(!user){
              return null;
            }
            return (
              <button 
                onClick={() => storyViewed(toggleStory({user:user, story:story}), story.id)} 
                className={"user__thumb" + (isNewStory(story.id) ? " user__thumb--hasNew" : "")}
                key={story.id}>
                <div className="user__thumb__wrapper">
                  <img src={user.avatar} alt={user.name} />
                </div>
              </button>
            );
          })} 

        </div>
      </section>

      {showStory && (
        <Story handleClose={toggleStory} user={showStory.user} story={showStory.story} />
        )}
    </React.Fragment>
  );
};

export default Stories;
