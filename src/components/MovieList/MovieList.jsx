import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // import for redux
import './MovieList.css' // import css file
// component imports
import Movie from './Movie';
// MUI imports
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function MovieList() {
    const dispatch = useDispatch();
    // get movies from redux
    const movies = useSelector(store => store.movies);

    // on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <div>
            <Typography className='center' variant="h3" gutterBottom>Movie List</Typography>
            <Grid container spacing={2} >
                {movies.map(movie => {
                    return (
                        <Movie key={movie.id} movie={movie} />
                    );
                })}
            </Grid>
        </div>
    );
};

export default MovieList;