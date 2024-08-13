import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CharacterList from './components/Characters';
import PlanetList from './components/Planets';
import StarshipList from './components/StarShips';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/planets" element={<PlanetList />} />
          <Route path="/starships" element={<StarshipList />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
