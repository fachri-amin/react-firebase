import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
import Dashboard from '../Dashboard';
import { Provider } from 'react-redux';
import store from '../../../config/redux';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Register} />
      </Router>
    </Provider>
  );
}

export default App;
