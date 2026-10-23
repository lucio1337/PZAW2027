import { useState, type CSSProperties } from "react";



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
    title: "Thriller",
    yearRelease: 1982,
    author: "Michael Jackson",
    genre: "POP",
    cover: "https://muzikercdn.com/uploads/products/3732/373292/main_af02fa57.jpg",
    songs: [
      {
        songTitle: "Wanna Be Startin' Somethin'",
        duration: "6:03",
      },
      {
        songTitle: "Baby Be Mine",
        duration: "4:20",
      },
      {
        songTitle: "The Girl Is Mine (with Paul McCartney)",
        duration: "3:42",
      },
      {
        songTitle: "Thriller",
        duration: "5:58",
      },
      {
        songTitle: "Beat It",
        duration: "4:18",
      },
      {
        songTitle: "Billie Jean",
        duration: "4:53",
      },
      {
        songTitle: "Human Nature",
        duration: "4:05",
      },
      {
        songTitle: "P.Y.T. (Pretty Young Thing)",
        duration: "3:58",
      },
      {
        songTitle: "The Lady in My Life",
        duration: "4:58",
      },
    ]
  },
  {
    title: "Dawn FM",
    yearRelease: 2022,
    author: "The Weeknd",
    genre: "R&B",
    cover: "https://media.pitchfork.com/photos/61d5fa911b710fb5ce48ed9f/master/pass/The-Weeknd-Dawn-FM.jpg",
    songs: [
      {
        songTitle: "Dawn FM",
        duration: "1:36",
      },
      {
        songTitle: "Gasoline",
        duration: "3:32",
      },
      {
        songTitle: "How Do I Make You Love Me?",
        duration: "3:34",
      },
      {
        songTitle: "Take My Breath",
        duration: "5:39",
      },
      {
        songTitle: "Sacrifice",
        duration: "3:08",
      },
      {
        songTitle: "A Tale By Quincy",
        duration: "1:36",
      },
      {
        songTitle: "Out of Time",
        duration: "3:34",
      },
      {
        songTitle: "Here We Go... Again (feat. Tyler, the Creator)",
        duration: "3:29",
      },
      {
        songTitle: "Best Friends",
        duration: "2:43",
      },
      {
        songTitle: "Is There Someone Else?",
        duration: "3:19",
      },
      {
        songTitle: "Starry Eyes",
        duration: "2:28",
      },
      {
        songTitle: "Every Angel Is Terrifying",
        duration: "2:47",
      },
      {
        songTitle: "Don't Break My Heart",
        duration: "3:25",
      },
      {
        songTitle: "I Heard You're Married (feat. Lil Wayne)",
        duration: "4:23",
      },
      {
        songTitle: "Less Than Zero",
        duration: "3:31",
      },
      {
        songTitle: "Phantom Regret by Jim",
        duration: "2:59",
      },
    ]
  },
  {
    title: "Małomiasteczkowy",
    yearRelease: 2018,
    author: "Dawid Podsiadło",
    genre: "POP",
    cover: "https://i.scdn.co/image/ab67616d0000b273c4aa14d6f01b64808cf9ae31",
    songs: [
      {
        songTitle: "Cantate Tutti",
        duration: "3:06",
      },
      {
        songTitle: "Dżins",
        duration: "5:11",
      },
      {
        songTitle: "Matomiasteczkowy",
        duration: "3:23",
      },
      {
        songTitle: "Najnowszy Klip",
        duration: "3:49",
      },
      {
        songTitle: "Trofea",
        duration: "3:44",
      },
      {
        songTitle: "Nie Ma Fal",
        duration: "3:58",
      },
      {
        songTitle: "LIS",
        duration: "4:30",
      },
      {
        songTitle: "Co Mówimy?",
        duration: "3:37",
      },
      {
        songTitle: "Nie Kłami",
        duration: "3:15",
      },
      {
        songTitle: "Matylda",
        duration: "5:13",
      },
    ]
  },
  {
    title: "Małomiasteczkowy",
    yearRelease: 2018,
    author: "Dawid Podsiadło",
    genre: "POP",
    cover: "https://i.scdn.co/image/ab67616d0000b273c4aa14d6f01b64808cf9ae31",
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


function Movie({ title, yearRelease, cover, rating }: IMovie) {
  var recommended = false;
  if (rating >= 8) {
    recommended = true;
  }
  return (
    <div className="card" onClick={()=>console.log("Wybrano film:"+title)}>
      <img
        className="card-img-top"
        src={cover}
        alt={title}
        style={{
          width: "250px",
          height: "350px",
          objectFit: "cover",
        }}
      />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">Year: {yearRelease}</p>
        <button onClick={(event)=>{
          event.stopPropagation()
          console.log("Pokaż szczegóły dla"+title)
        }
        }
          >Pokaż szczegóły</button>
        <p className="card-text">Rating: {rating}</p>
        {recommended ? <label>Polecany</label> : null}
      </div>
    </div>
  );
}

function Book({ title, yearRelease, cover, pages }: IBook) {
  var classic = false;
  if (yearRelease < 2000) {
    classic = true;
  }
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={cover}
        alt={title}
        style={{
          width: "250px",
          height: "350px",
          objectFit: "cover",
        }}
      />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">Year: {yearRelease}</p>
        <p className="card-text">Pages: {pages}</p>
        {classic ? <label>Klasyka</label> : null}
      </div>
    </div>
  );
}

function handleSongClick(title: string, album: string){
    console.log("Wybrano "+ title+" z albumu "+album)
  }

function Music({ title, yearRelease, cover, author, songs, genre }: IMusic) {
  
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={cover}
        alt={title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
        }}
      />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">Year: {yearRelease}</p>
        <p className="card-text">Artist: {author}</p>
        <p className="card-text">Genre: {genre}</p>
        {songs?.length == 0 ?
          <div className="alert alert-warning" role="alert">
            Brak utworów
          </div>
          : null}
        {songs?.length != 0 ?
          <div className="table-responsive">
            <table className="table table-dark table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col" className="text-end">Duration</th>
                </tr>
              </thead>
              <tbody>
                {songs?.map((song, index) => (
                  <tr onClick={()=>handleSongClick(song.songTitle, title)}>
                    <td>{index + 1}</td>
                    <td>{song.songTitle}</td>
                    <td className="text-end">{song.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          : null}
      </div>
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

  const sectionStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    overflow: "hidden",
    transition: "max-height 0.5s ease-in-out",
    width: "100%",
  };


  
  function rollMenu(section: keyof typeof openSections) {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  }

  return (
    <div className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        fontFamily: "system-ui, sans-serif",
        color: "grey",
        gap: "15px",
        alignItems: "center",
      }}
    >

      <h3 onClick={() => rollMenu("movies")}>{openSections.movies ? "⏷Movies" : "⏵Movies"}</h3>
      <section
        style={{
          ...sectionStyle,
          maxHeight: openSections.movies ? "3000px" : "0px",
        }}
      >
        {movies.map(m => <Movie {...m} />)}
      </section>


      <h3 onClick={() => rollMenu("moviesAfter2010")}>{openSections.moviesAfter2010 ? "⏷Movies after 2010" : "⏵Movies after 2010"}</h3>
      <section
        style={{
          ...sectionStyle,
          maxHeight: openSections.moviesAfter2010 ? "3000px" : "0px",
        }}
      >
        {moviesAfter2010.map((m) => <Movie {...m}></Movie>)}
      </section>


      <h3 onClick={() => rollMenu("books")}>{openSections.books ? "⏷Books" : "⏵Books"}</h3>
      <section
        style={{
          ...sectionStyle,
          maxHeight: openSections.books ? "3000px" : "0px",
        }}
      >
        {books.map(b => (
          <Book key={b.title} {...b} />
        ))}
      </section>

      <h3 onClick={() => rollMenu("booksDateSorted")}>{openSections.booksDateSorted ? "⏷Books sorted by date" : "⏵Books sorted by date"}</h3>
      <section
        style={{
          ...sectionStyle,
          maxHeight: openSections.booksDateSorted ? "3000px" : "0px",
        }}
      >
        {booksDateSorted.map((b) => <Book {...b}></Book>)}
      </section>


      <h3 onClick={() => rollMenu("music")}>{openSections.music ? "⏷Albums" : "⏵Albums"}</h3>
      <section
        style={{
          ...sectionStyle,
          maxHeight: openSections.music ? "4000px" : "0px",
        }}
      >
        {albums.map((a) => <Music {...a}></Music>)}
      </section>



      <h3 onClick={() => rollMenu("mostSongs")}>{openSections.mostSongs ? "⏷Album with the most songs" : "⏵Album with the most songs"}</h3>
      <section
        style={{
          ...sectionStyle,
          maxHeight: openSections.mostSongs ? "4000px" : "0px",
        }}
      >
        <Music {...albumWithTheMostSongs}></Music>
      </section>



    </div>
  );
}

export default App;
