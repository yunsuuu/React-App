import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => { // await = then()과 같은 역할
    // const response = await fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    // );
    // const json = await response.json();
    // 위의 response, json 각 변수를 간결하게 합치기
    const json = await ( 
      await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => { // 코드를 한번만 실행하고 싶을 때
    getMovies();
  }, []);
  // console.log(movies); // movies = json.data.moveis
  return <div> 
    { loading ?
      <h3>Loading...</h3> : 
      <div>
        {movies.map((movie) => 
        <Movie 
          key={movie.id}
          id={movie.id}
          coverImg={movie.medium_cover_image} 
          title={movie.title} 
          summary={movie.summary} 
          genres={movie.genres}
        />)}
      </div> 
    }
  </div>
}

export default Home;