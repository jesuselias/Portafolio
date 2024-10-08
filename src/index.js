import React from 'react';
import ReactDOM from 'react-dom';

//import css in order
import 'normalize.css';
import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './img/icons/css/ionicons.css';
import './img/font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.min.css'
import './style.css';

//import js libraries
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';

import * as serviceWorker from './serviceWorker';

//import components
import Navbar from './components/navbar.jsx';
import Intro from './components/intro.jsx';
import About from './components/about.jsx';
import Portfolio from './components/portfolio.jsx';
import Contact from './components/contact.jsx';
import BackToTop from './components/back-top.jsx';
import Preloader from './components/preloader';

import { Provider } from 'react-redux';
import configureStore from './store/store';


//import Axios from './api';

const store = configureStore();

// const apiUrlEnvVariables = {
//     development: Config.REACT_APP_DEV_API_BASE_URL,
//     production: Config.REACT_APP_PROD_API_BASE_URL,
//     test: Config.REACT_APP_TEST_API_BASE_URL,
//   };
  
//Axios.baseUrl = 'https://run.mocky.io';


ReactDOM.render(
    <Provider store={store}>
    <React.Fragment>
        <Navbar />
        <Intro />
        <About />
        <Portfolio />
        <Contact />
        <BackToTop />
        <Preloader />
    </React.Fragment>
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
