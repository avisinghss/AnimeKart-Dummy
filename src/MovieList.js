import MovieCard from "./MovieCard";

function MovieList(props) {
  const { movies, onClickAddtocart, onIncStars, onClickFav, onDecStars } =
    props;
  return (
    <div className="main">
      {movies.map((movie, index) => (
        <MovieCard
          movies={movie}
          key={index}
          onIncStars={onIncStars}
          onDecStars={onDecStars}
          onClickFav={onClickFav}
          onClickAddtocart={onClickAddtocart}
        />
      ))}
    </div>
  );
}

export default MovieList;
