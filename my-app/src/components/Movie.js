import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }){
  return (
    <div>
      <img src={coverImg}></img>
      <h4>
        <Link to={`/movie/${id}`}>{`Title: <${title}>`}</Link>
      </h4>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => <li key={genre}>{genre}</li>)}
      </ul>
      <hr />
    </div>
  );
}

// Movie component의 PropTypes 설정
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
}

export default Movie;