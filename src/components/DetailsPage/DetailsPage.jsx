import './DetailsPage.css';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function DetailsPage() {
    const history = useHistory();

    const detailsArray = useSelector(store => store.movieDetails);

    return (
        <>
            <Typography variant="h3" gutterBottom>Movie Details</Typography>
            {
                detailsArray.map(movie => {
                    return (
                        <Grid container spacing={2}>
                            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={movie.poster} width="275" height="400" />
                            </Grid>
                            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <Typography variant="h4" gutterBottom>{movie.title}</Typography>
                                <Typography variant="body1" gutterBottom>{movie.description}</Typography>
                                <br />
                                <Typography variant="h6" gutterBottom>Genres</Typography>
                                <Typography variant="body1" gutterBottom>{movie.genres}</Typography>
                            </Grid>
                        </Grid>
                    )
                })
            }
            <button onClick={() => history.push('/')} >Back to list</button>
        </>
    );
};

export default DetailsPage;

