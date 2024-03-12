import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Youtube() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=AIzaSyD7DSedOYMvNwAWdBSIGqRx0ombXao5w1M&part=snippet&type=video&q=music `
        );

        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <ul>
        {videos.map((value) => {
          return (
            <li>
              {value.snippet.title}
              <img
                src={value.snippet.thumbnails.default.url}
                alt={value.snippet.title}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
