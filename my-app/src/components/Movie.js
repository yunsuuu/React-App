import PropTypes from "prop-types";

function Movie({ coverImg, title, summary, genres }){
  return (
    <div>
      <img src={coverImg}></img>
      <h4>Title: {title}</h4>
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
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
}

export default Movie;