import React from 'react';
import './VideoDetail.css';

function VideoDetail({ video }) {
    let url;
    if (video) {
        url = `https://www.youtube.com/embed/${video.id.videoId}`;
    }
    return (
        <>
            {video && <div className="video-detail">
                <div className="embed-wrapper">
                    <iframe className="youtube-embedded-frame" title="youtube-embedded-frame" src={url}></iframe>
                </div>
                <div className="info">
                    <div className="title">{video.snippet.title}</div>
                    <div className="description">{video.snippet.description}</div>
                </div>
            </div>}
        </>
    )
}

export default VideoDetail

