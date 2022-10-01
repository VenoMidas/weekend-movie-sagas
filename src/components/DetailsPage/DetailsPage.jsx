import './DetailsPage.css';
import { useHistory } from 'react-router-dom';

function DetailsPage() {
    const history = useHistory();

    return (
        <>
            <h1>This is the details page</h1>

            <button onClick={() => history.push('/')} >Back to list</button>
        </>
    );
};

export default DetailsPage;