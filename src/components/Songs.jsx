import { useEffect, useState } from "react";
import SongCards from "./SongCards";
import { getAccessToken, getSpotifyData } from "../ApiCalls/Api";

function Songs() {
  const [showSongs, setShowSongs] = useState(false);
  const [songs, setSongs] = useState([]);
  const [artistName, setArtistName] = useState("Justin Bieber");
  const [artistId, setArtistId] = useState("1uNFoZAHBGtllmzznpCI3s");
  const [market, setMarket] = useState("US");

  // for displaying random reccomended songs
  const [recSongs, setRecSongs] = useState([]);
  const [genre, setGenre] = useState(["pop"]);

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
  async function sendRecSongsApi() {
    // temp endpoints for practice
    const recsEndpoint = `recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA`;
    // this is deprecated so how ????
    const recResponse = await getSpotifyData(recsEndpoint);

    if (recResponse) {
      setRecSongs(recResponse.tracks.slice(0, 10));
    } else {
      console.error("Recommendations not found");
    }
  }

  useEffect(() => {
    if (showSongs) {
      sendSongApi();
      sendRecSongsApi();
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
        {/* shwoing reccomended songs */}
        <div>
          {showSongs && (
            <div>
              <h2>10 reccomended {genre} Songs</h2>
              <SongCards songs={recSongs} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Songs;
