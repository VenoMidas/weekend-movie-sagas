import { useHistory } from 'react-router-dom';

function Movie({ movie }) {
    const history = useHistory();

    const handleClick = () => {
        // dispatch to get/id
        history.push('/details');
    };

    return (
        <div>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} onClick={handleClick} />
        </div>
    )
};

export default Movie;