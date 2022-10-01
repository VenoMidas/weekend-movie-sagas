import './DetailsPage.css';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function DetailsPage() {
    const history = useHistory();

    const detailsArray = useSelector(store => store.movieDetails);

    return (
        <>
            <h1>This is the details page</h1>
            {console.log('detailsArray', detailsArray)}
            <ul>
                {
                    detailsArray.map(movie => {
                        return (
                            <li key={movie.id}>
                                <h3>{movie.title}</h3>
                                <h3>{movie.description}</h3>
                                <h3>{movie.poster}</h3>
                                <h3>{movie.genres}</h3>
                            </li>
                        )
                    })
                }
            </ul>

            <button onClick={() => history.push('/')} >Back to list</button>
        </>
    );
};

export default DetailsPage;