import React from 'react';
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';

const promise = loadStripe
('pk_test_51OEAlpSDzsJ5PLlflLoJuK8bh6FLrjI78UxxocJp903hLTxJOjAIJJNIIi6tesnzBWi9dMpbEd9BtHMlUH7k2jR0001cPqKJAK');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads...
    //It's like an IF statement in React
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/Login' element={<Login />} />
            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={
            <Elements stripe={promise}><Payment /></Elements>} 
            />
          </Routes>
        </div>
      </Router>
    </>

  );
}

export default App;
