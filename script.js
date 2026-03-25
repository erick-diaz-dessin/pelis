const movies = [
  {
    title: "Volver al futuro",
    year: 1985,
    poster: "./images/Back_to_the_Future.jpg",
    trailer: "https://www.youtube.com/embed/ez6WQ7IX72U"
  },
  {
    title: "Interstellar",
    year: 2014,
    poster: "https://m.media-amazon.com/images/I/71n58yH3nCL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
  }
];

const container = document.getElementById("movies");

movies.forEach(movie => {
  const div = document.createElement("div");
  div.className = "movie";

  div.innerHTML = `
    <!-- HEADER -->
    <div class="movie-header">
        <div class="title">
        ${movie.title} (${movie.year})
        </div>

        <label class="watched">
        <input type="checkbox" class="watched-checkbox">
        Ya la vi
        </label>
    </div>

    <div class="movie-content">

        <!-- IZQUIERDA -->
        <div class="left">
        <img src="${movie.poster}" class="poster">
        </div>

        <!-- DERECHA -->
        <div class="right">
        <iframe 
            src="${movie.trailer}" 
            allow="autoplay; fullscreen"
            allowfullscreen>
        </iframe>
        </div>

    </div>
  `;

  container.appendChild(div);
});