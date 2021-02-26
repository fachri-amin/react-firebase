import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
import Dashboard from '../Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Register} />
    </Router>
  );
}

export default App;
