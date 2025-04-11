import { useEffect, useState } from "react";

function SongCards({ songs }) {
  return (
    <>
      <section className="flex justify-center items-center gap-[20px] px-5">
        {songs.map((songs) => (
          <div key={songs.id}>
            <img
              src={songs.album.images[0].url}
              alt={songs.name}
            />
            <h2>{songs.name}</h2>
          </div>
        ))}
      </section>
    </>
  );
}

export default SongCards;
