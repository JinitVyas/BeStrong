import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import NotFound from './Screens/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route will render the Home component */}
        <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
