import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DinosaurDetail from './pages/DinosaurDetail';
import Games from './pages/Games';
import Media from './pages/Media';
import Guide from './pages/Guide';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dinosaur/:id" element={<DinosaurDetail />} />
          <Route path="games" element={<Games />} />
          <Route path="media" element={<Media />} />
          <Route path="guide" element={<Guide />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
