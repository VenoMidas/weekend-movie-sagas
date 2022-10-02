import { useHistory } from 'react-router-dom'; // import for routing
import { useDispatch } from 'react-redux'; // import for redux
// MUI imports
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function Movie({ movie }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        // dispatch to GET /api/movie/:id
        dispatch({ type: 'FETCH_DETAILS', payload: movie.id });
        // navigate to details page (should this be moved to after the SET_DETAILS in index.js?)
        // will this component reload on change from the store?
        history.push('/details');
    };

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} sx={{display: 'flex', justifyContent: 'center'}}>
            <Card elevation={6} sx={{ width: 275 }}>
                <CardMedia
                    component="img"
                    height="400"
                    image={movie.poster}
                    onClick={handleClick}
                    sx={{ objectFit: "fill" }}
                />
            </Card>
        </Grid>
    )
};

export default Movie;