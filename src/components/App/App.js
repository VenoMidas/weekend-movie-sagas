import { HashRouter as Router, Route } from 'react-router-dom'; // imports to setup router
import './App.css'; // css file import
// component imports
import MovieList from '../MovieList/MovieList'
import DetailsPage from '../DetailsPage/DetailsPage';
import Header from './Header/Header';
// MUI imports
import Container from '@mui/material/Container';

function App() {
  return (
    <Container>

      <Header />

      <Router>

        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route exact path='/details'>
          <DetailsPage />
        </Route>

        {/* Add Movie page */}

      </Router>

    </Container>
  );
};

export default App;