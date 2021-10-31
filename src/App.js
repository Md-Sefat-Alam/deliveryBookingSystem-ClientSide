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
import UserData from './component/UserData/UserData';
import SetOwnOffer from './component/SetOwnOffer/SetOwnOffer';
import PrivetRoute from './component/PrivetRoute/PrivetRoute';
import MyOrders from './component/MyOrders/MyOrders';
import ManageAllOrders from './component/ManageAllOrders/ManageAllOrders';
import OrderWithOffer from './component/OrderWithOffer/OrderWithOffer';


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

              <PrivetRoute path='/set-own-offer'>
                <SetOwnOffer></SetOwnOffer>
              </PrivetRoute>

              <Route path='/login'>
                <Login></Login>
              </Route>

              <PrivetRoute path='/booking'>
                <BookforDelivery></BookforDelivery>
              </PrivetRoute>

              <PrivetRoute path="/order-with-offer/:id">
                <OrderWithOffer></OrderWithOffer>
              </PrivetRoute>

              <PrivetRoute path='/my-orders'>
                <MyOrders></MyOrders>
              </PrivetRoute>

              <PrivetRoute path='/manage-all-orders'>
                <ManageAllOrders></ManageAllOrders>
              </PrivetRoute>

            </Switch>
            <div style={{ position: 'absolute', top: '10%', right: '10%', width: '250px' }}>
              <UserData></UserData>
            </div>
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
