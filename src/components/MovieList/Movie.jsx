import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid'; // import Grid element from MUI
import Card from '@mui/material/Card'; // import Card element from MUI
import CardMedia from '@mui/material/CardMedia'; // import CardMedia element from MUI

function Movie({ movie }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        // dispatch to get/id
        dispatch({ type: 'FETCH_DETAILS', payload: movie.id });
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