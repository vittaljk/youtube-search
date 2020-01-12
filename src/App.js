/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import VideoList from './components/Video/VideoList/VideoList';
import Axios from 'axios';
import VideoDetail from './components/Video/VideoDetail/VideoDetail';
import { apiURL } from './utils';
import youtubeLogo from './assets/YouTube.png';

function App() {
  const [searchText, setSearchtext] = useState('surffing');
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [regionCode, setregionCode] = useState(null);
  
  const searchVideos = (text) => {
    Axios.get(apiURL + text)
    .then(({ data, status }) => {
      if (status === 200 && data.items.length > 0) {
        setVideos(data.items);
        setSelectedVideo(data.items[0]);
        setregionCode(data.regionCode);
      }
    })
    .catch(e => {
      console.log(e);
    })
  }

  const videoSelectHandler = selectedVideo => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
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
    // TODO: logic for loading
    <>
      <div className="search-bar-wrapper">
        <div>
          <img className="youtube-logo" src={youtubeLogo} alt="youtube logo"/>{ regionCode && <sup>&nbsp;{regionCode}</sup>}
        </div>
        <SearchBar 
          onSearch={onSearchHandler}
        />
      </div>

      <div className="detail-list-wrapper">
        <div className="detail-wrapper">
          {selectedVideo &&
            <VideoDetail
              video={selectedVideo}
            />
          }
        </div>
        <div className="list-wrapper">
          {videos.length > 0 &&
            <VideoList
              videos={videos}
              onVideoSelect={videoSelectHandler} 
            />
          }
        </div>
      </div>
    </>
  );
}

export default App;
