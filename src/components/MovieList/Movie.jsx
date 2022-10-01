import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function Movie({ movie }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        // dispatch to get/id
        dispatch({ type: 'FETCH_DETAILS', payload: movie.id });
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