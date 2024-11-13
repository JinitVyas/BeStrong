import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import NotFound from './Screens/NotFound';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route will render the Home component */}
        <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
