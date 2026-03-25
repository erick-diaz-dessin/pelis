import { db } from "./firebase.js";
import { collection, getDocs, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

async function cargarEstadoPeliculas() {
  const snapshot = await getDocs(collection(db, "peliculas"));

  snapshot.forEach(doc => {
    const data = doc.data();

    const checkbox = document.querySelector(
      `input[data-title="${data.nombre}"]`
    );

    if (checkbox) {
      checkbox.checked = data.vista;
    }
  });
}

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
    poster: "./images/Interstellar_film_poster.jpg",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    poster: "./images/Eternal_Sunshine_of_the_Spotless_Mind.png",
    trailer: "https://www.youtube.com/embed/07-QBnEkgXU"
  },
  {
    title: "Good will hunting",
    year: 1997,
    poster: "./images/Good_Will_Hunting.png",
    trailer: "https://www.youtube.com/embed/PaZVjZEFkRs"
  },
  {
    title: "Scent of a woman",
    year: 1992,
    poster: "./images/unnamed.jpg",
    trailer: "https://www.youtube.com/embed/losLAzU9YCk"
  },
  {
    title: "The Green Mile",
    year: 1999,
    poster: "./images/The_Green_Mile.jpg",
    trailer: "https://www.youtube.com/embed/Ki4haFrqSrw"
  },
  {
    title: "Forrest Gump",
    year: 1994,
    poster: "./images/Forrest_Gump_poster.jpg",
    trailer: "https://www.youtube.com/embed/XHhAG-YLdk8"
  },
  {
    title: "The Usual Suspects",
    year: 1995,
    poster: "./images/Usual_suspects_ver1.jpg",
    trailer: "https://www.youtube.com/embed/Q0eCiCinc4E"
  },
  {
    title: "El secreto de sus ojos",
    year: 2009,
    poster: "./images/Cartel-nuevo-de-el-secreto-de-sus-ojos.jpg",
    trailer: "https://www.youtube.com/embed/hKa8U-8vsfU"
  },
  {
    title: "12 Monkeys",
    year: 1995,
    poster: "./images/Twelve_monkeysmp.jpg",
    trailer: "https://www.youtube.com/embed/15s4Y9ffW_o"
  },
  {
    title: "La vita è bella",
    year: 1997,
    poster: "./images/759_LifeIsBeautiful_Catalog_Poster_v2_Approved.png",
    trailer: "https://www.youtube.com/embed/pAYEQP8gx3w"
  },
  {
    title: "Inception",
    year: 2010,
    poster: "./images/Inception_(2010)_theatrical_poster.jpg",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
  },
  {
    title: "Shutter Island",
    year: 2010,
    poster: "./images/Shutterislandposter.jpg",
    trailer: "https://www.youtube.com/embed/v8yrZSkKxTA"
  },
  {
    title: "The Butterfly Effect",
    year: 2004,
    poster: "./images/Butterflyeffect_poster.jpg",
    trailer: "https://www.youtube.com/embed/kkWQLjI2rAU"
  },
  {
    title: "Nueve reinas",
    year: 2000,
    poster: "./images/9reinasposter.jpg",
    trailer: "https://www.youtube.com/embed/I42JYVjQkPI"
  },
  {
    title: "Man on Fire",
    year: 2004,
    poster: "./images/Man_on_fireposter.jpg",
    trailer: "https://www.youtube.com/embed/eDDh50B6kA4"
  },
  {
    title: "Schindler's List",
    year: 1993,
    poster: "./images/Schindler's_List_movie.jpg",
    trailer: "https://www.youtube.com/embed/mxphAlJID9U"
  },
  {
    title: "The Sixth Sense",
    year: 1999,
    poster: "./images/The_Sixth_Sense_poster.png",
    trailer: "https://www.youtube.com/embed/3-ZP95NF_Wk"
  }
];

let currentIndex = 0;
const pageSize = 5;

const container = document.getElementById("movies");

function renderMovies() {
  const nextMovies = movies.slice(currentIndex, currentIndex + pageSize);

  nextMovies.forEach(movie => {
    const div = document.createElement("div");
    div.className = "movie";

    div.innerHTML = `
      <div class="movie-header">
        <div class="title">
          ${movie.title} (${movie.year})
        </div>

        <label class="watched">
          <input type="checkbox" 
            class="watched-checkbox" 
            data-title="${movie.title}">
          Ya la vi
        </label>
      </div>

      <div class="movie-content">
        <div class="left">
          <img src="${movie.poster}" class="poster" loading="lazy">
        </div>

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

  currentIndex += pageSize;

  // ocultar botón si ya no hay más
  if (currentIndex >= movies.length) {
    document.getElementById("loadMore").style.display = "none";
  }
}

renderMovies();
cargarEstadoPeliculas();

document.addEventListener("change", async (e) => {
  if (e.target.classList.contains("watched-checkbox")) {
    const title = e.target.dataset.title;
    const checked = e.target.checked;

    const snapshot = await getDocs(collection(db, "peliculas"));

    snapshot.forEach(async (d) => {
      if (d.data().nombre === title) {
        await updateDoc(doc(db, "peliculas", d.id), {
          vista: checked
        });
      }
    });
  }
});

document.getElementById("loadMore").addEventListener("click", async () => {
  renderMovies();
  await cargarEstadoPeliculas();
});