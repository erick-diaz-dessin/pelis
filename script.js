const movies = [
  {
    title: "Volver al futuro",
    year: 1985,
    poster: "./images/Back_to_the_Future.jpg",
    trailer: "https://drive.google.com/file/d/1lAyHG193SGYyGCJqMF-XfWvW-I5YMR-C/preview"
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
    <div class="movie-content">

      <!-- IZQUIERDA -->
      <div class="left">
        <img src="${movie.poster}" class="poster">
        <h2>${movie.title}</h2>
        <p>${movie.year}</p>
      </div>

      <!-- DERECHA -->
      <div class="right">
        <iframe 
  src="${movie.trailer}" 
  allow="autoplay; fullscreen"
  allowfullscreen>
</iframe>
        <label>
          <input type="checkbox" class="watched-checkbox">
          Ya la vi
        </label>
      </div>

    </div>
  `;

  container.appendChild(div);
});