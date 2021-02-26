import React, { useState } from "react";
import axios from "axios";
import MovieItem from "../components/MovieItem";

function DiscoverMOviePage() {
  const [searchText, set_searchText] = useState("");
  const [searchState, set_SearchState] = useState("idle");
  const [movie, set_movie] = useState([]);

  const submitHere = async (event) => {
    event.preventDefault();
    //console.log("TODO search movies for:", searchText);
    if (searchText === "") {
      set_SearchState("idle");
      return;
    }

    set_SearchState("Searching");

    const queryParam = encodeURIComponent(searchText);
    const response = await axios.get(
      `https://omdbapi.com/?apikey=cfa1dcb4&s=${queryParam}`
    );
    console.log("success!", response.data);
    set_SearchState("done");
    set_movie(response.data.Search);
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <form onSubmit={submitHere}>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button type="submit">Search For movies</button>
      </form>{" "}
      {searchState === "idle" && (
        <p>Type here for search your favourite movie</p>
      )}
      {searchState === "Searching" && <p>Searching...</p>}
      {searchState === "done" && (
        <div>
          <h2>Search Results</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {movie.map((m, index) => {
              return (
                <MovieItem
                  key={index}
                  title={m.Title} //{Title, imdbID, Year, Poster all follow API Search: Array() }
                  imdbId={m.imdbID}
                  year={m.Year}
                  img={m.Poster}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default DiscoverMOviePage;
