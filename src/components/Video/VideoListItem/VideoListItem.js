import React from 'react'
import './VideoListItem.css';

function VideoListItem(props) {
    return (
        <>
            {props.video && <div className="item" onClick={() => props.onVideoSelect(props.video)}>
                <div>
                    <img className="thumbnail" src={props.video.snippet.thumbnails.default.url} alt="video thumbnail"/>
                </div>
                <div className="info">
                    <div className="video-item-title"><b>{props.video.snippet.title}</b></div>
                    <div className="description">{props.video.snippet.description}</div>  
                </div>
            </div>}
        </>
    )
}

export default VideoListItem

