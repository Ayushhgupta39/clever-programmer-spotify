import axios from "axios";
import React, { useEffect, useState } from "react";
import SpotifyWebPlayer from "react-spotify-web-playback/lib";
import Playlists from "./Playlists";
import { token } from "./Spotify";
import User from "./User";

export default function Player() {
  const [trackUri, setTrackUri] = useState(null);

  useEffect(() => {
    const getTrackUri = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      let uri = response.data.item;
      setTrackUri(uri);
    };
    getTrackUri();
  }, []);
  return (
    <div>
      <User />
      <Playlists />
      <SpotifyWebPlayer
        token={token}
        uris={[trackUri]}
        magnifySliderOnHover
        name="Buzz"
        syncExternalDevice
      />
      <a href="/">
        <button className="btn btn-primary">
          <i className="fa-solid fa-play"></i>Exit
        </button>
      </a>
    </div>
  );
}
