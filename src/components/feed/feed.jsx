import React, { useEffect, useState } from 'react';
import FeedCard from './feedCard';
import FeedLeft from './feedLeft';
import FeedCenter from './feedCenter';
import FeedRight from './feedRight';
import MessagePanel from './messagePanel';

const getFeeds = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    title: 'Test title',
                },
                {
                    title: 'Test title',
                },
                {
                    title: 'Test title',
                },
            ]);
        }, 2 * 1000);
    })
};

function Feed() {
    const [feeds, setFeeds] = useState([]);

    useEffect(() => {
        getFeeds().then((data) => setFeeds(data));
    }, []);

    return (
      <div>
      {/*feeds.map((feed) => (
          <FeedCard title={feed.title} />
      ))*/}
      
      <div class="container" style={{marginTop: '20px'}}>
        <div class="row">
          
          {/*<!-- left panel -->*/}
          <FeedLeft/>

          {/*<!-- feed panel -->*/}
          <FeedCenter/>

          {/*<!-- right panel -->*/}
          <FeedRight/>
        </div>
        
        {/**Message panel */}
        <MessagePanel/>
        
      </div>
  </div>   
    )
}

export default Feed;
