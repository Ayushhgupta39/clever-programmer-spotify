export const authEndpoint = "https://accounts.spotify.com/authorize";

// const redirectUri = "http://localhost:3000/";
const redirectUri = "https://63bd1e366c864f6f9564ae44--heroic-swan-ab74d3.netlify.app";
const clientId = "3773ad164cbb42c48211ab9471f1840b";
// const clientSecret = "05e426d9421047ceb20caa29d377f888";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-top-read",
  "app-remote-control",
  "streaming",
  "user-read-email",
  "user-read-private"
];

export const token = window.location.hash.substring(1).split("&")[0].split("=")[1];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
