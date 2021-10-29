import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import BookforDelivery from './component/BookforDelivery/BookforDelivery';
import AuthProvider from './contexts/AuthProvider';
import Login from './component/Login/Login';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <div className='container-fluid'>
            <div className='container'>
              <Header />
            </div>
            <Switch>

              <Route exact path="/">
                <Home></Home>
              </Route>

              <Route path='/home'>
                <Home></Home>
              </Route>

              <Route path='/login'>
                <Login></Login>
              </Route>

              <Route path='/booking'>
                <BookforDelivery></BookforDelivery>
              </Route>

            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
