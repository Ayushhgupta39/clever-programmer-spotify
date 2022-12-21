import axios from "axios";
import React, { useEffect, useState } from "react";
import SpotifyWebPlayer from "react-spotify-web-playback/lib";
import Playlists from "./Playlists";
import { token } from "./Spotify";

export default function Player() {
  const [trackUri, setTrackUri] = useState([]);

  // useEffect(() => {
  //   const getTrackUri = async () => {
  //     const response = await axios.get(
  //       "https://api.spotify.com/v1/me/player/currently-playing",
  //       {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     let uri = response.data.item.uri;
  //     console.log(uri);
  //     setTrackUri(uri);
  //   };
  //   getTrackUri();
  // }, []);
  return (
    <div>
      <Playlists />
      {/* <SpotifyWebPlayer
        token={token}
        uris={[trackUri]}
        magnifySliderOnHover
        name="Buzz"
        syncExternalDevice
        // styles={{
        //     bgColor: '#000000',
        //     color: 'white',
        //     trackNameColor: 'white',

        // }}
      /> */}
    </div>
  );
}
