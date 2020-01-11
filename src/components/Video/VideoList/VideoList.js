import React from 'react'
import VideoListItem from '../VideoListItem/VideoListItem'
// import PropTypes from 'prop-types'

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

// VideoList.propTypes = {

// }

export default VideoList

