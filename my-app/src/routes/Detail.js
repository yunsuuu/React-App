// await = async() 함수 내부에 있지 않으면 사용할 수 없음

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
    setLoading(false);
  }
  useEffect(() => {
    getMovie();
  }, []);
  return <div>
    <h2>Detail Page</h2>
    { loading ?
      <h3>Loading...</h3> :
      <div>3
        <img src={details.medium_cover_image}></img>
        <h4>{details.title}</h4>
        <p>{details.description_intro}</p>
      </div>
    }
  </div>
}

export default Detail;