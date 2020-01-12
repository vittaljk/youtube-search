import React from 'react'
import VideoListItem from '../VideoListItem/VideoListItem'

function VideoList(props) {
    return (
        <>
            {props.videos.map(video => (
                <VideoListItem
                    key={video.etag}
                    video={video}
                    onVideoSelect={props.onVideoSelect} 
                />
            ))}
        </>
    )
}

export default VideoList

