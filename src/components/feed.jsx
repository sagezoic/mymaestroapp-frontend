import React, { useEffect, useState } from 'react';
import FeedCard from './FeedCard/FeedCard';

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
    });
};

function Feed() {
    const [feeds, setFeeds] = useState([]);

    useEffect(() => {
        getFeeds().then((data) => setFeeds(data));
    }, []);

    return (
        <div>
            {feeds.map((feed) => (
                <FeedCard title={feed.title} />
            ))}
        </div>
    );
}

export default Feed;
