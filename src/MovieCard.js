import React, { Component } from "react";

class MovieCard extends Component {
  render() {
    const { movies, onIncStars, onClickFav, onClickAddtocart, onDecStars } =
      this.props;
    const { title, plot, price, rating, stars, fav, cart, poster } =
      this.props.movies;
    return (
      <div className="movie-card">
        <div className="left">
          <img src={poster} alt="poster" />
        </div>
        <div className="right">
          <div className="title">{title}</div>
          <div className="plot">{plot}</div>
          <div className="price">Rs {price}</div>
          <div className="footer">
            <div className="rating">{rating}</div>
            <div className="star-dis">
              <img
                alt="decrease"
                className="str-btn"
                src="https://cdn-icons-png.flaticon.com/128/10263/10263924.png?ga=GA1.1.1858186116.1692691144&semt=ais"
                onClick={() => onDecStars(movies)}
              />
              <img
                alt="star"
                className="stars"
                src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
              />
              <img
                alt="increase"
                className="str-btn"
                src="https://cdn-icons-png.flaticon.com/128/1828/1828819.png?ga=GA1.1.1858186116.1692691144&semt=ais"
                onClick={() => onIncStars(movies)}
              />
              <span>{stars}</span>
            </div>
            <button
              className={fav ? "unfavourite-btn" : "favourite-btn"}
              onClick={() => onClickFav(movies)}
            >
              {fav ? "Unfavourite" : "Favourite"}
            </button>

            <button
              className={cart ? "remove-cart-btn" : "cart-btn"}
              onClick={() => onClickAddtocart(movies)}
            >
              {cart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
