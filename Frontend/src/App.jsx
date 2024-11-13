import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import NotFound from './Screens/NotFound';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard';
import ProtectedRoute from './Components/ProtectedRoute';
import GetStarted from './Components/GetStartForm';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route will render the Home component */}
        <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="getstarted" element={
          <ProtectedRoute>
            <GetStarted />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
