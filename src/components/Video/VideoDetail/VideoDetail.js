import React from 'react'
// import PropTypes from 'prop-types'

function VideoDetail({ video }) {
    const url = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            {url}
        </div>
    )
}

// VideoDetail.propTypes = {

// }

export default VideoDetail

