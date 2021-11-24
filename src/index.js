import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle';

import "./styles/styles.css"
import Home from './Home';


ReactDOM.render(<Home />, document.querySelector("#app"));