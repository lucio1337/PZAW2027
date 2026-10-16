
interface IMedia {
  title: string;
  yearRelease: number;
  cover: string;
}

interface IMovie extends IMedia { }
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

const MovieTab: IMovie[] = [
  {
    title: "Inception",
    yearRelease: 2010,
    cover: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg"
  },
  {
    title: "The Batman",
    yearRelease: 2022,
    cover: "https://m.media-amazon.com/images/S/pv-target-images/3de84cca07fc963b66a01a5465c2638066119711e89c707ce952555783dd4b4f.jpg"
  },
  {
    title: "Shutter Island",
    yearRelease: 2010,
    cover: "https://m.media-amazon.com/images/M/MV5BN2FjNWExYzEtY2YzOC00YjNlLTllMTQtNmIwM2Q1YzBhOWM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  }
]

const BookTab: IBook[] = [
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

const AlbumTab: IMusic[] = [
  {
    title: "Hurry Up Tomorrow",
    yearRelease: 2024,
    author: "The Weeknd",
    genre: "R&B",
    cover: "https://krytyczniemuzycznie.com/wp-content/uploads/2025/01/the-weeknd-hurry-up-tomorrow-2025.png",
    songs: [{ songTitle: "Timeless", duration: "4:17" }, { songTitle: "Drive", duration: "3:08" }]
  }
]

function Movie({ title, yearRelease, cover }: IMovie) {
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
    </div>
  );
}

function Book({ title, yearRelease, cover, pages }: IBook) {
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


      {songs?.map((song) => (
        <div key={song.songTitle}>
          <h2>{song.songTitle}</h2>
          <p>{song.duration}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  const sectionStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
  };

  return (
    <main
      style={{
        padding: "20px",
        fontFamily: "system-ui, sans-serif",
        color: "grey",
      }}
    >

      <h2>Movies</h2>
      <section style={sectionStyle}>
        {MovieTab.map((m)=><Movie {...m}></Movie>)}
      </section>

      <h2>Books</h2>
      <section style={sectionStyle}>
        {BookTab.map((b)=><Book {...b}></Book>)}
      </section>

      <h2>Music</h2>
      <section style={{ ...sectionStyle, justifyContent: "center" }}>
        {AlbumTab.map((a)=><Music {...a}></Music>)}
      </section>
    </main>
  );
}

export default App;
