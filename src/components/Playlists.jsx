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
      const { items } = response.data;
      const playlists = items.map((name, id) => {
        return { name, id };
      });
      setPlaylists(items)
    };
    getPlaylist();
  }, []);
  console.log(playlists);
  return (
    <div>
      <ul>
        {playlists.map(({ name, id }) => {
          return (
            <li key={id}>
              {name.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
