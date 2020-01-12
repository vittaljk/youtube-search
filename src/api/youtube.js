import request from './request'

const getVideos = searchText => request(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCnRomCRH0UzsEVKsLnVkX_PyEOqQmp5Ns&part=snippet&type=video&maxResults=50&q=${searchText}`)

export { getVideos }