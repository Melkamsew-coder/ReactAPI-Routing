import React, { useState, useEffect } from "react";
import "./YoutubeVideos.css";

const YoutubeVideos = () => {
  const [videos, setVideos] = useState(null); // Set initial state to null
  const API_KEY = process.env.REACT_APP_API_KEY;
  console.log("API Key:", API_KEY);

  const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet&maxResults=8&type=video`;

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVideos(data.items); // Set videos to the items array if available
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
        setVideos([]); // Set videos to an empty array on error
      });
  }, []);

  return (
    <div className="youtube-videos">
      <h2>Latest Videos</h2>
      <div className="videos-grid">
        {videos ? ( // Check if videos is not null
          videos.length > 0 ? (
            videos.map((video, index) => (
              <div key={index} className="video-card">
                <a
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                  />
                  <h3>{video.snippet.title}</h3>
                  <p>{video.snippet.description}</p>
                  <p className="publish-date">
                    Published on:{" "}
                    {new Date(video.snippet.publishedAt).toLocaleDateString()}
                  </p>
                </a>
              </div>
            ))
          ) : (
            <p>No videos found.</p> // Message if videos is an empty array
          )
        ) : (
          <p>Loading videos...</p> // Loading message while videos is null
        )}
      </div>
    </div>
  );
};

export default YoutubeVideos;
