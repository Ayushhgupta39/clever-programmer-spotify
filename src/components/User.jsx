import axios from "axios";
import React, { useEffect, useState } from "react";
import { token } from "./Spotify";

export default function User() {
    const [userName, setName] = useState("");
    useEffect(() => {
        const getUser = async () => {
            const response = await axios.get("https://api.spotify.com/v1/me",
            {
                headers: {
                  Authorization: "Bearer " + token,
                  "Content-Type": "application/json",
                },
              }
            );
            let name = response.data.display_name;
            setName(name);
        }
        getUser();
    })

  return <div><h1>Hi {userName}</h1></div>;
}
