import React from 'react'
import VideoListItem from '../VideoListItem/VideoListItem'

function VideoList(props) {
    return (
        <div className="video-list">
            {props.videos && props.videos.length > 0 && props.videos.map(video => (
                <VideoListItem
                    className="item-wrapper"
                    key={video.etag}
                    video={video}
                    onVideoSelect={props.onVideoSelect} 
                />
            ))}
        </div>
    )
}

export default VideoList

