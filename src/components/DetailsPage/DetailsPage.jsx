import './DetailsPage.css';
import { useHistory } from 'react-router-dom';

function DetailsPage() {
    const history = useHistory();

    return (
        <>
            <h1>This is the details page</h1>
            <ul>
                <li>Title</li>
                <li>Description</li>
                <li>image</li>
                <li>all genres</li>
            </ul>

            <button onClick={() => history.push('/')} >Back to list</button>
        </>
    );
};

export default DetailsPage;