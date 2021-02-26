import React from "react";

export default function MovieItem(props) {
  //console.log(props);

  return (
    <div
      style={{
        width: "25%",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <h1>{props.title}</h1>
      <h2>{props.imdbId}</h2>
      <h3>{props.year}</h3>
      <img src={props.img} alt={props.title} />
    </div>
  );
}
