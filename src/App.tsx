import { useState } from "react";



interface IMedia {
  title: string;
  yearRelease: number;
  cover: string;
}

interface IMovie extends IMedia {
  rating: number;
}
interface IBook extends IMedia {
  pages: number;
}
interface IMusic extends IMedia {
  author?: string;
  songs?: ISong[];
  genre?: string
}
interface ISong {
  songTitle: string;
  duration: string;
}

const movies: IMovie[] = [
  {
    title: "Inception",
    yearRelease: 2010,
    cover: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
    rating: 10
  },
  {
    title: "The Batman",
    yearRelease: 2022,
    cover: "https://m.media-amazon.com/images/S/pv-target-images/3de84cca07fc963b66a01a5465c2638066119711e89c707ce952555783dd4b4f.jpg",
    rating: 8
  },
  {
    title: "Shutter Island",
    yearRelease: 2010,
    cover: "https://m.media-amazon.com/images/M/MV5BN2FjNWExYzEtY2YzOC00YjNlLTllMTQtNmIwM2Q1YzBhOWM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 2.2
  }
]

const books: IBook[] = [
  {
    title: "Pet Sematary",
    yearRelease: 1983,
    pages: 374,
    cover: "https://upload.wikimedia.org/wikipedia/commons/2/24/Pet_Sematary_%281983%29_front_cover%2C_first_edition.jpg?utm_source=pl.wikipedia.org&utm_campaign=index&utm_content=original"
  },
  {
    title: "The Odyssey",
    yearRelease: 1488,
    pages: 480,
    cover: "https://cdn.swiatksiazki.pl/media/catalog/product/4/5/4599907508345.jpg?store=default&image-type=image"
  },
  {
    title: "IT",
    yearRelease: 1986,
    pages: 1138,
    cover: "https://m.media-amazon.com/images/I/71I9hVz4IKL._AC_UF1000,1000_QL80_.jpg"
  }
]

const albums: IMusic[] = [
  {
    title: "Hurry Up Tomorrow",
    yearRelease: 2024,
    author: "The Weeknd",
    genre: "R&B",
    cover: "https://krytyczniemuzycznie.com/wp-content/uploads/2025/01/the-weeknd-hurry-up-tomorrow-2025.png",
    songs: [{ songTitle: "Timeless", duration: "4:17" }, { songTitle: "Drive", duration: "3:08" }]
  },
  {
    title: "Hurry Up Tomorrow",
    yearRelease: 2024,
    author: "The Weeknd",
    genre: "R&B",
    cover: "https://krytyczniemuzycznie.com/wp-content/uploads/2025/01/the-weeknd-hurry-up-tomorrow-2025.png",
    songs: [{ songTitle: "Timeless", duration: "4:17" }, { songTitle: "Drive", duration: "3:08" }, { songTitle: "Drive", duration: "3:08" }, { songTitle: "Drive", duration: "3:08" }]
  },
  {
    title: "Hurry Up Tomorrow",
    yearRelease: 2024,
    author: "The Weeknd",
    genre: "R&B",
    cover: "https://krytyczniemuzycznie.com/wp-content/uploads/2025/01/the-weeknd-hurry-up-tomorrow-2025.png",
    songs: []
  }
]

movies.sort((a, b) => a.title.localeCompare(b.title));
books.sort((a, b) => a.title.localeCompare(b.title));
albums.sort((a, b) => a.title.localeCompare(b.title));

const moviesAfter2010 = movies.filter((m) => m.yearRelease > 2010);
const booksDateSorted = [...books].sort((a, b) => b.yearRelease - a.yearRelease);
var albumWithTheMostSongs = albums[0];
for (let album of albums) {
  if (album.songs?.length! > albumWithTheMostSongs.songs?.length!) {
    albumWithTheMostSongs = album;
  }
}


function rollMenu() {

}

function Movie({ title, yearRelease, cover, rating }: IMovie) {
  var recommended = false;
  if (rating >= 8) {
    recommended = true;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "18px",
        border: "1px solid white",
        borderRadius: "12px",
        background: "white",
      }}
    >
      <img
        src={cover}
        alt={title}
        style={{ width: "250px", height: "350px", objectFit: "cover" }}
      />
      <h3>{title}</h3>
      <p>Year: {yearRelease}</p>
      <p>Rating: {rating}</p>
      {recommended ? <label>Polecany</label> : null}
    </div>
  );
}

function Book({ title, yearRelease, cover, pages }: IBook) {
  var classic = false;
  if (yearRelease < 2000) {
    classic = true;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "18px",
        border: "1px solid white",
        borderRadius: "12px",
        background: "white",
      }}
    >
      <img
        src={cover}
        alt={title}
        style={{ width: "250px", height: "350px", objectFit: "cover" }}
      />
      <h3>{title}</h3>
      <p>Year: {yearRelease}</p>
      <p>Pages: {pages}</p>
      {classic ? <label>Klasyka</label> : null}
    </div>
  );
}

function Music({ title, yearRelease, cover, author, songs, genre }: IMusic) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "18px",
        border: "1px solid white",
        borderRadius: "12px",
        background: "white",
      }}
    >
      <img
        src={cover}
        alt={title}
        style={{
          width: "280px",
          height: "280px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <h3>{title}</h3>
      <p>Year: {yearRelease}</p>
      {author && <p>Artist: {author}</p>}
      <p>Genre: {genre}</p>

      {songs?.length == 0 ? <label style={{ backgroundColor: "red" }}>Brak utworów</label> : null}
      {songs?.map((song, index) => (
        <div key={`${song.songTitle}-${index}`}>
          <p>{index + 1}. {song.songTitle}</p>
          <p>{song.duration}</p>
        </div>
      ))}
    </div>
  );
}

function App() {


  const [openSections, setOpenSections] = useState({
    movies: true,
    moviesAfter2010: true,
    books: true,
    booksDateSorted: true,
    music: true,
    mostSongs: true,
  });

  const sectionStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    overflow: "hidden",
    transition: "max-height 0.5s ease-in-out"
  };

  function rollMenu(section: keyof typeof openSections) {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  }

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        fontFamily: "system-ui, sans-serif",
        color: "grey",
        gap: "15px",
        alignItems: "center"
      }}
    >

      <h2 onClick={() => rollMenu("movies")}>{openSections.movies ? "⏷Movies" : "⏵Movies"}</h2>
      <section
        style={{
          ...sectionStyle,
          maxHeight: openSections.movies ? "550px" : "0px",
        }}
      >
        {movies.map(m => <Movie {...m} />)}
      </section>


      <h2 onClick={() => rollMenu("moviesAfter2010")}>{openSections.moviesAfter2010 ? "⏷Movies after 2010" : "⏵Movies after 2010"}</h2>
      <section
        style={{
          ...sectionStyle,
          maxHeight: openSections.moviesAfter2010 ? "550px" : "0px",
        }}
      >
        {moviesAfter2010.map((m) => <Movie {...m}></Movie>)}
      </section>


      <h2 onClick={() => rollMenu("books")}>{openSections.books ? "⏷Books" : "⏵Books"}</h2>
      <section
        style={{
          ...sectionStyle,
          maxHeight: openSections.books ? "550px" : "0px",
        }}
      >
        {books.map(b => (
          <Book key={b.title} {...b} />
        ))}
      </section>

      <h2 onClick={() => rollMenu("booksDateSorted")}>{openSections.booksDateSorted ? "⏷Books sorted by date" : "⏵Books sorted by date"}</h2>
      <section
        style={{
          ...sectionStyle,
          maxHeight: openSections.booksDateSorted ? "550px" : "0px",
        }}
      >
        {booksDateSorted.map((b) => <Book {...b}></Book>)}
      </section>


      <h2 onClick={() => rollMenu("music")}>{openSections.music ? "⏷Albums" : "⏵Albums"}</h2>
      <section
        style={{
          ...sectionStyle,
          maxHeight: openSections.music ? "550px" : "0px",
        }}
      >
        {albums.map((a) => <Music {...a}></Music>)}
      </section>



      <h2 onClick={() => rollMenu("mostSongs")}>{openSections.mostSongs ? "⏷Album with the most songs" : "⏵Album with the most songs"}</h2>
      <section
        style={{
          ...sectionStyle,
          maxHeight: openSections.mostSongs ? "550px" : "0px",
        }}
      >
        <Music {...albumWithTheMostSongs}></Music>
      </section>



    </main>
  );
}

export default App;
