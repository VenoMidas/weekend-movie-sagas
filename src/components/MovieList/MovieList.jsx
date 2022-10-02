import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import Movie from './Movie';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function MovieList() {
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <div>
            <Typography variant="h3" gutterBottom>Movie List</Typography>
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