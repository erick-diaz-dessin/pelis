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
  },
  {
    title: "Ghost",
    year: 1990,
    poster: "./images/Ghost_(1990_movie_poster).jpg",
    trailer: "https://www.youtube.com/embed/capS3yV9eY8"
  },
  {
    title: "The Fly",
    year: 1986,
    poster: "./images/Fly_poster.jpg",
    trailer: "https://www.youtube.com/embed/fj1SHpBsY7w"
  },
  {
    title: "Joker",
    year: 2019,
    poster: "./images/Joker_(2019_film)_poster.jpg",
    trailer: "https://www.youtube.com/embed/zAGVQLHvwOY"
  },
  {
    title: "Gran Torino",
    year: 2008,
    poster: "./images/Gran_Torino_poster.jpg",
    trailer: "https://www.youtube.com/embed/RMhbr2XQblk"
  },
  {
    title: "Bad Santa",
    year: 2003,
    poster: "./images/Bad_Santa_film.jpg",
    trailer: "https://www.youtube.com/embed/xQvaoRScND4"
  },
  {
    title: "The Sandlot",
    year: 1993,
    poster: "./images/Sandlot_poster.jpg",
    trailer: "https://www.youtube.com/embed/iXOOL6SygW8"
  },
  {
    title: "Dodgeball: A True Underdog Story",
    year: 2004,
    poster: "./images/Movie_poster_Dodgeball_A_True_Underdog_Story.jpg",
    trailer: "https://www.youtube.com/embed/W-XbDZUnUmw"
  },
  {
    title: "A League of Their Own",
    year: 1992,
    poster: "./images/League_of_their_own_ver2.jpg",
    trailer: "https://www.youtube.com/embed/kZihpHXsGLE"
  },
  {
    title: "The Family Man",
    year: 2000,
    poster: "./images/Family_man_movie.jpg",
    trailer: "https://www.youtube.com/embed/OnouJoQs52c"
  },
  {
    title: "The Benchwarmers",
    year: 2006,
    poster: "./images/Benchwarmers_poster.jpg",
    trailer: "https://www.youtube.com/embed/DgLZGPfxpkM"
  },
  {
    title: "Nosotros los nobles",
    year: 2013,
    poster: "./images/Nosotros_los_Nobles_poster.jpg",
    trailer: "https://www.youtube.com/embed/fDF_ZdL7G9o"
  },
  {
    title: "Click",
    year: 2006,
    poster: "./images/Click_film.jpg",
    trailer: "https://www.youtube.com/embed/zZNC5emNyEQ"
  },
  {
    title: "Hellboy",
    year: 2006,
    poster: "./images/Hellboy_poster.jpg",
    trailer: "https://www.youtube.com/embed/kA9vtXbbhVs"
  },
  {
    title: "El laberinto del fauno",
    year: 2006,
    poster: "./images/Pan's_Labyrinth.jpg",
    trailer: "https://www.youtube.com/embed/FGzvvUBXj5M"
  },
  {
    title: "The Matrix",
    year: 1999,
    poster: "./images/The_Matrix.png",
    trailer: "https://www.youtube.com/embed/vKQi3bBA1y8"
  },
  {
    title: "The Others",
    year: 2001,
    poster: "./images/TheOthers.jpg",
    trailer: "https://www.youtube.com/embed/C7pKqaPtMiA"
  }
];

let currentIndex = 0;
const pageSize = 10;

const container = document.getElementById("movies");

function renderMovies() {
  const nextMovies = movies.slice(currentIndex, currentIndex + pageSize);

  nextMovies.forEach(movie => {
    const div = document.createElement("div");
    div.className = "movie";

    const videoId = movie.trailer.split("/embed/")[1];
    const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

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
          <img 
            src="${thumbnail}" 
            class="thumbnail video-placeholder" 
            data-video="${videoId}"
            loading="lazy"
          >
        </div>
      </div>
    `;

    container.appendChild(div);

    const thumbnailEl = div.querySelector(".video-placeholder");

    thumbnailEl.addEventListener("click", () => {
      const id = thumbnailEl.dataset.video;

      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
      iframe.allow = "autoplay; fullscreen";
      iframe.allowFullscreen = true;

      thumbnailEl.replaceWith(iframe);
    });
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