import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import MacHacks from './Pages/MacHacks';
import Projects from './Pages/Projects';
import Partnerships from './Pages/Partnerships';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import PlaceholderLegal from './Pages/PlaceholderLegal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="machacks" element={<MacHacks />} />
          <Route path="projects" element={<Projects />} />
          <Route path="partnerships" element={<Partnerships />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="accessibility" element={<PlaceholderLegal title="Accessibility" />} />
          <Route path="privacy" element={<PlaceholderLegal title="Privacy Policy" />} />
          <Route path="terms" element={<PlaceholderLegal title="Terms of Service" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
