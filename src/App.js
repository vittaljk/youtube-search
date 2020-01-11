/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import VideoList from './components/Video/VideoList/VideoList';
import Axios from 'axios';
import VideoDetail from './components/Video/VideoDetail/VideoDetail';
import { apiURL } from './utils';

function App() {
  const [searchText, setSearchtext] = useState('surffing');
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const searchVideos = (text) => {
    Axios.get(apiURL + text)
    .then(({ data, status }) => {
      if (status === 200 && data.items.length > 0) {
        setVideos(data.items);
        setSelectedVideo(data.items[0]);
      }
    })
    .catch(e => {
      console.log(e);
    })
  }

  const videoSelectHandler = selectedVideo => {
    setSelectedVideo(selectedVideo);
  }

  const onSearchHandler = value => {
    setSearchtext(value);
    searchVideos(value);
  }

  useEffect(() => {
    searchVideos(searchText);
  }, []);

  return (
    <>
      <SearchBar 
        onSearch={onSearchHandler}
      />

      {selectedVideo &&
        <VideoDetail
          video={selectedVideo}
        />
      }
      
      {videos.length > 0 ?
        <VideoList
          videos={videos}
          onVideoSelect={videoSelectHandler} 
        />
        :
        // TODO: logic for loading
        <div>No videos found</div>
      }
    </>
  );
}

export default App;
