import { useHistory } from 'react-router-dom';

function Movie({ movie }) {
    const history = useHistory();

    return (
        <div>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} onClick={() => history.push('/details')} />
        </div>
    )
};

export default Movie;