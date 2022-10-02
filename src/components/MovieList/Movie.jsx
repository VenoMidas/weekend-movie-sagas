import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid'; // import Grid element from MUI

function Movie({ movie }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        // dispatch to get/id
        dispatch({ type: 'FETCH_DETAILS', payload: movie.id });
        history.push('/details');
    };

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} onClick={handleClick} />
        </Grid>
    )
};

export default Movie;