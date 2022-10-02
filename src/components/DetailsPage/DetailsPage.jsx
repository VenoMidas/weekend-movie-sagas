import './DetailsPage.css';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function DetailsPage() {
    const history = useHistory();

    const detailsArray = useSelector(store => store.movieDetails);

    return (
        <>
            <Typography variant="h3" gutterBottom>Movie Details</Typography>
            <br />
            <br />
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
            <br />
            <br />
            <Button variant="outlined" onClick={() => history.push('/')} >Back to list</Button>
        </>
    );
};

export default DetailsPage;

