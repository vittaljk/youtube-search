import React from 'react'
// import PropTypes from 'prop-types'

function VideoListItem(props) {
    return (
        <div onClick={() => props.onVideoSelect(props.video)}>
            <div className="thumbnail">
                <img src={props.video.snippet.thumbnails.default.url} alt="video thumbnail"/>
            </div>
            <div className="title">{props.video.title}</div>
        </div>
    )
}

// VideoListItem.propTypes = {

// }

export default VideoListItem

