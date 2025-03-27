import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './pages/layout/Layout.jsx';
import Catalog from './pages/catalog/Catalog.jsx';
import Playground from './components/Playground.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Catalog />}></Route>
          <Route path="/pl" element={<Playground />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
