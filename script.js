import { db } from "./firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";

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
      <input type="checkbox" class="watched-checkbox" data-title="${movie.title}">
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