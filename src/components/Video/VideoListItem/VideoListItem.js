import React from 'react'
// import PropTypes from 'prop-types'
import './VideoListItem.css';

function VideoListItem(props) {
    return (
        <div className="item" onClick={() => props.onVideoSelect(props.video)}>
            <div>
                <img className="thumbnail" src={props.video.snippet.thumbnails.default.url} alt="video thumbnail"/>
            </div>
            <div className="info">
                <div className="video-item-title"><b>{props.video.snippet.title}</b></div>
                <div className="description">{props.video.snippet.description}</div>  
            </div>
        </div>
    )
}

// VideoListItem.propTypes = {

// }

export default VideoListItem

