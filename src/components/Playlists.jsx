import axios from "axios";
import React, { useEffect, useState } from "react";
import { token } from "./Spotify";

export default function Playlists() {
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    const getPlaylist = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const items = response.data.items;
      setPlaylists(items);
      console.log(items);
    };
    getPlaylist();
  }, []);
  return (
    <div className="playlist-content">
      <ul>
        {playlists.map((values, id) => {
          return (
            <li key={id}>
              <div className="list-items">
                <div className="playlist_name">{values.name}</div>
                <div className="playlist_owner">
                  {values.owner.display_name}
                </div>
                <div className="playlist_cover">
                  <img src={values.images[0].url} alt="" />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
