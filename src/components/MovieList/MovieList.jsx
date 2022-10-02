import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import Movie from './Movie';
import Grid from '@mui/material/Grid';

function MovieList() {
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <div>
            <h1>MovieList</h1>
            <Grid container spacing={2}>
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