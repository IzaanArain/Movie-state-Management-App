import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import { MovieProvider } from './MovieListContext';
import AddMovie from './AddMovie'

function App() {
  return (
    <MovieProvider>
    <div className="App">
      <Nav></Nav>
      <header className="App-header">
        <AddMovie/>
        <MovieList/>
      </header>
    </div>
    </MovieProvider>
  );
}

export default App;
