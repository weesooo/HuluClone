import React from "react";
import "./MovieCard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

const ImageBaseURL = "https://image.tmdb.org/t/p/original/"; // get films images
function MovieCard({ film }) {
  return (
    <div className="MovieCard">
      <img
        src={`${ImageBaseURL}${film.backdrop_path || film.poster_path}`}
        alt="film poster"
      />
      {/* Using react-text-truncate to have ..... instead of full film */}
      <TextTruncate
        line={3}
        element="p"
        truncateText="...."
        text={film.overview}
      />
      <h2>{film.title || film.original_name}</h2>
      <p className="MovieCard_stats">
        <ThumbUpAltIcon />
        {film.vote_count}
      </p>
    </div>
  );
}

export default MovieCard;
