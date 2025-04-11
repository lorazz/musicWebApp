import { useEffect, useState } from "react";
import SongCards from "./SongCards";
import { getAccessToken, getSpotifyData } from "../ApiCalls/Api";

function Songs() {
  const [showSongs, setShowSongs] = useState(false);
  const [songs, setSongs] = useState([]);
  const [artistName, setArtistName] = useState("Justin Bieber");
  const [artistId, setArtistId] = useState("1uNFoZAHBGtllmzznpCI3s");
  const [market, setMarket] = useState("US");

  async function sendSongApi() {
    // temp endpoints for practice
    const endpoint = `artists/${artistId}/top-tracks?market=${market}`;
    const response = await getSpotifyData(endpoint);

    console.log(response);

    if (response) {
      setSongs(response.tracks.slice(0, 5));
      setArtistName(response.tracks[0]?.artists[0]?.name);
    } else {
      console.error("Tracks not found");
    }
  }

  useEffect(() => {
    if (showSongs) {
      sendSongApi();
    }
  }, [showSongs]);

  return (
    <>
      <section>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowSongs(true)}
            className="text-center text-2xl font-bold mb-4"
          >
            {showSongs ? `${artistName}'s Top 5 Songs` : "Show Songs"}
          </button>
        </div>
        <div className="flex justify-center">
          {showSongs && (
            <div className="flex flex-col items-center mt-1">
              <SongCards songs={songs} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Songs;
