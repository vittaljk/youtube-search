import React from 'react';
// import PropTypes from 'prop-types'
import './VideoDetail.css';
function VideoDetail({ video }) {
    const url = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className="embed-wrapper">
                <iframe className="youtube-embedded-frame" title="youtube-embedded-frame" src={url}></iframe>
            </div>
            <div className="info">
                <div className="title">{video.snippet.title}</div>
                <div className="description">{video.snippet.description}</div>  
            </div>
        </div>
    )
}

// VideoDetail.propTypes = {

// }

export default VideoDetail

