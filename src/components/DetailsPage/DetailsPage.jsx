import './DetailsPage.css'; // imports css file
import { useHistory } from 'react-router-dom'; // import for router
import { useSelector } from 'react-redux'; // import for redux
// MUI imports
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function DetailsPage() {
    const history = useHistory();

    // get movie details from redux
    const detailsArray = useSelector(store => store.movieDetails);

    return (
        <>
            <Typography className='center' variant="h3" gutterBottom>Movie Details</Typography>
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
            <Box className='center'>
                <Button variant="outlined" onClick={() => history.push('/')} >Back to list</Button>
            </Box>
        </>
    );
};

export default DetailsPage;