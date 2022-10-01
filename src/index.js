import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
// watches for dispatches
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    // need to watch for the GET from movie for details page
    yield takeEvery('FETCH_DETAILS', fetchMovieDetails);
};

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        // console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });
    } catch (error) {
        console.log('Error in fetchAllMovies', error);
        alert('Something went wrong!');
    };
};

// Store the movie details
const movieDetails = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIE_DETAILS':
            return action.payload;
        default:
            return state;
    };
};

function* fetchMovieDetails(action) {
    // axios for getting movie and details
    try {
        const movieDetails = yield axios.get(`/api/movie/${action.payload}`);
        yield put({ type: 'SET_MOVIE_DETAILS', payload: movieDetails.data });
    } catch (error) {
        console.log('Error in fetchMovieDetails', error);
        alert('Something went wrong.');
    };
    // console.log('in fetch movie details')
};

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    };
};

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    };
};

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieDetails,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);