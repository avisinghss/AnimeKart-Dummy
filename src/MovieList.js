import React, { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          title: "One Piece",
          plot: "Monkey D. Luffy sets off on an adventure with his pirate crew in hopes of finding the greatest treasure ever, known as the One Piece.",
          price: 255,
          rating: 8.9,
          stars: 0,
          fav: false,
          cart: false,
          poster:
            "https://m.media-amazon.com/images/I/81nMPKCsoML._AC_UF1000,1000_QL80_.jpg",
        },
        {
          title: "Naruto",
          plot: "Naruto Uzumaki, a young ninja with sealed demon fox powers, seeks recognition from his peers and dreams of becoming the strongest ninja.",
          price: 199,
          rating: 9.0,
          stars: 0,
          fav: false,
          cart: false,
          poster: "https://m.media-amazon.com/images/I/81qb4I6rbsL.jpg",
        },
        {
          title: "Attack on Titan",
          plot: "In a world where humanity resides within enormous walled cities to protect themselves from Titans, gigantic humanoid creatures, the story follows Eren Yeager and his friends who join the military to fight the Titans.",
          price: 299,
          rating: 9.1,
          stars: 0,
          fav: false,
          cart: false,
          poster: "https://m.media-amazon.com/images/I/81dH7-pkjiL.jpg",
        },
        {
          title: "Jujutsu Kaisen",
          plot: "Yuji Itadori, a high school student with extraordinary physical abilities, joins a secret organization to battle curses after consuming a powerful cursed object.",
          price: 229,
          rating: 8.7,
          stars: 0,
          fav: false,
          cart: false,
          poster:
            "https://m.media-amazon.com/images/I/81sqMtBYOHS._AC_UF894,1000_QL80_.jpg",
        },
        {
          title: "Dragon Ball Z",
          plot: "Goku and his friends defend Earth from powerful foes and otherworldly threats as they strive to become the most powerful warriors in the universe.",
          price: 189,
          rating: 8.7,
          stars: 0,
          fav: false,
          cart: false,
          poster:
            "https://m.media-amazon.com/images/I/71LGhBR-syL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          title: "Death Note",
          plot: "Light Yagami discovers a mysterious notebook that allows him to kill anyone whose name he writes in it. He sets out to create a utopia free from criminals, drawing the attention of a brilliant detective known as L.",
          price: 179,
          rating: 9.0,
          stars: 0,
          fav: false,
          cart: false,
          poster: "https://m.media-amazon.com/images/I/716ASj7z2GL.jpg",
        },
        {
          title: "Hunter x Hunter",
          plot: "Gon Freecss aspires to become a Hunter and find his missing father. Along the way, he forms friendships and encounters challenges in the dangerous Hunter Examination.",
          price: 249,
          rating: 9.1,
          stars: 0,
          fav: false,
          cart: false,
          poster: "https://m.media-amazon.com/images/I/71aoeOhdNnL.jpg",
        },
        {
          title: "Demon Slayer: Kimetsu no Yaiba",
          plot: "Tanjiro Kamado, a young boy, becomes a demon slayer to avenge his family and save his demon-turned sister.",
          price: 279,
          rating: 9.3,
          stars: 0,
          fav: false,
          cart: false,
          poster:
            "https://m.media-amazon.com/images/I/71WwkZcLu+L._AC_UF894,1000_QL80_.jpg",
        },
        {
          title: "My Hero Academia",
          plot: "Izuku Midoriya enrolls in a prestigious academy for heroes to learn how to use his newfound superpowers and protect the world from villains.",
          price: 209,
          rating: 8.8,
          stars: 0,
          fav: false,
          cart: false,
          poster: "https://m.media-amazon.com/images/I/81YmsKUWVCL.jpg",
        },
        {
          title: "Sword Art Online",
          plot: "Players get trapped in a virtual reality MMORPG, and the only way to escape is to complete the game without dying.",
          price: 189,
          rating: 8.5,
          stars: 0,
          fav: false,
          cart: false,
          poster: "https://m.media-amazon.com/images/I/91uTt8yuH5S.jpg",
        },
        {
          title: "One Punch Man",
          plot: "Saitama, a hero for fun, can defeat any opponent with a single punch. Bored with his invincible power, he seeks a worthy challenge.",
          price: 199,
          rating: 8.7,
          stars: 0,
          fav: false,
          cart: false,
          poster:
            "https://m.media-amazon.com/images/I/81FZQnV-C1S._AC_UF894,1000_QL80_.jpg",
        },
        {
          title: "Tokyo Ghoul",
          plot: "Kaneki, a college student, becomes a half-ghoul after a chance encounter. Now, he must navigate a world where humans and ghouls coexist.",
          price: 179,
          rating: 8.6,
          stars: 0,
          fav: false,
          cart: false,
          poster:
            "https://m.media-amazon.com/images/I/615UoMEsDEL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          title: "Cowboy Bebop",
          plot: "Spike Spiegel and his bounty hunter crew travel through space, chasing the galaxy's most dangerous criminals.",
          price: 239,
          rating: 9.0,
          stars: 0,
          fav: false,
          cart: false,
          poster: "https://m.media-amazon.com/images/I/81kTVUwMJpL.jpg",
        },
        {
          title: "Steins;Gate",
          plot: "Rintarou Okabe discovers a way to send messages to the past, leading to a series of time-bending events with unforeseen consequences.",
          price: 219,
          rating: 9.1,
          stars: 0,
          fav: false,
          cart: false,
          poster:
            "https://m.media-amazon.com/images/I/91tKL3CvwoL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          title: "Mob Psycho 100",
          plot: "Shigeo Kageyama, also known as Mob, possesses incredible psychic abilities. He must navigate life while suppressing his emotions to avoid unleashing his true power.",
          price: 209,
          rating: 8.8,
          stars: 0,
          fav: false,
          cart: false,
          poster: "https://m.media-amazon.com/images/I/713c3XA-RrL.jpg",
        },
        {
          title: "Neon Genesis Evangelion",
          plot: "In a post-apocalyptic world, teenagers pilot giant mechs to protect Earth from mysterious beings known as Angels.",
          price: 259,
          rating: 8.5,
          stars: 0,
          fav: false,
          cart: false,
          poster: "https://m.media-amazon.com/images/I/81ITQq5gZmL.jpg",
        },
        {
          title: "Code Geass: Lelouch of the Rebellion",
          plot: "Lelouch vi Britannia gains a mysterious power and sets out to bring down the oppressive Britannian Empire.",
          price: 229,
          rating: 8.7,
          stars: 0,
          fav: false,
          cart: false,
          poster: "https://m.media-amazon.com/images/I/71lfpyqBZJL.jpg",
        },
        {
          title: "Fairy Tail",
          plot: "Natsu Dragneel and his friends embark on magical adventures as members of the Fairy Tail guild.",
          price: 189,
          rating: 8.1,
          stars: 0,
          fav: false,
          cart: false,
          poster: "https://m.media-amazon.com/images/I/71mPXSUeXqL.jpg",
        },
        {
          title: "Re:Zero - Starting Life in Another World",
          plot: "Subaru Natsuki finds himself in a fantasy world where he discovers he has the ability to return from death.",
          price: 249,
          rating: 8.6,
          stars: 0,
          fav: false,
          cart: false,
          poster:
            "https://images-cdn.ubuy.co.in/635708614a7dba706e6f9b32-poster-stop-online-re-zero-starting.jpg",
        },
        {
          title: "The Promised Neverland",
          plot: "Emma, Norman, and Ray try to escape an orphanage when they discover the dark secrets of their existence.",
          price: 219,
          rating: 8.7,
          stars: 0,
          fav: false,
          cart: false,
          poster: "https://m.media-amazon.com/images/I/71JjlW-zeeL.jpg",
        },
        {
          title: "Parasyte: The Maxim",
          plot: "Shinichi Izumi battles against alien parasites that take over human bodies, leading to a complex relationship between him and his parasite, Migi.",
          price: 199,
          rating: 8.5,
          stars: 0,
          fav: false,
          cart: false,
          poster:
            "https://m.media-amazon.com/images/I/814SvIj5wtL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          title: "No Game No Life",
          plot: "Siblings Sora and Shiro, known as Blank, challenge the gaming world's top players in a bid to defeat the god of games.",
          price: 179,
          rating: 8.5,
          stars: 0,
          fav: false,
          cart: false,
          poster:
            "https://m.media-amazon.com/images/I/81LM5L1GSyL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          title: "Black Clover",
          plot: "Asta, born without magic, strives to become the Wizard King and protect his kingdom alongside his rival, Yuno.",
          price: 209,
          rating: 8.0,
          stars: 0,
          fav: false,
          cart: false,
          poster: "https://m.media-amazon.com/images/I/81uEVxA2VPS.jpg",
        },
        {
          title: "Overlord",
          plot: "In the virtual game world of Yggdrasil, Momonga remains as the last player when the servers shut down, and he discovers the game world has become real.",
          price: 239,
          rating: 7.8,
          stars: 0,
          fav: false,
          cart: false,
          poster:
            "https://m.media-amazon.com/images/I/719L7ZSJMHL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          title: "Assassination Classroom",
          plot: "Students are tasked with assassinating their alien teacher, Koro-sensei, who has vowed to destroy Earth after one year.",
          price: 189,
          rating: 8.2,
          stars: 0,
          fav: false,
          cart: false,
          poster: "https://m.media-amazon.com/images/I/91oRmZ53OBL.jpg",
        },
        {
          title: "Haikyuu!!",
          plot: "Shoyo Hinata joins his high school volleyball team, aiming to surpass his rival Kageyama and reach the national championships.",
          price: 219,
          rating: 8.7,
          stars: 0,
          fav: false,
          cart: false,
          poster: "https://m.media-amazon.com/images/I/718mXN3FI1L.jpg",
        },
        {
          title: "Gurren Lagann",
          plot: "Simon and Kamina rise from an underground village to fight against the oppressive Spiral King and his mechs in a quest for freedom.",
          price: 259,
          rating: 8.6,
          stars: 0,
          fav: false,
          cart: false,
          poster:
            "https://m.media-amazon.com/images/I/715I0CvtKnL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          title: "Bleach",
          plot: "Ichigo Kurosaki gains the powers of a Soul Reaper and must protect the living world from evil spirits and guide departed souls to the afterlife.",
          price: 239,
          rating: 8.2,
          stars: 0,
          fav: false,
          cart: false,
          poster: "https://m.media-amazon.com/images/I/51nwDLVezGL.jpg",
        },
      ],
    };
  }
  handleAddStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    if (movies[movieId].stars < 5) {
      movies[movieId].stars += 0.5;
    }

    this.setState({
      movies,
    });
  };

  handleDecStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    if (movies[movieId].stars > 0) {
      movies[movieId].stars -= 0.5;
    }

    this.setState({
      movies,
    });
  };

  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].fav = !movies[movieId].fav;

    this.setState({
      movies,
    });
  };

  handleAddtocart = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].cart = !movies[movieId].cart;

    this.setState({
      movies,
    });
  };
  render() {
    const { movies } = this.state;
    return (
      <div className="main">
        {movies.map((movie, index) => (
          <MovieCard
            movies={movie}
            key={index}
            onIncStars={this.handleAddStars}
            onDecStars={this.handleDecStars}
            onClickFav={this.handleToggleFav}
            onClickAddtocart={this.handleAddtocart}
          />
        ))}
      </div>
    );
  }
}

export default MovieList;
