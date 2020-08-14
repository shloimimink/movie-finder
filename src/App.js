import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Movie from "./components/movie/Movie";
// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
//redux
import {Provider} from 'react-redux';
import store from './store';


const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Navbar/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/movie/:id" component={Movie}/>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
