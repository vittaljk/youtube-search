import request from './request'

const getVideos = searchText => request(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&type=video&maxResults=50&q=${searchText}`)

export { getVideos }