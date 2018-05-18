import React from 'react'; 
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(( <App />), document.getElementById('root'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App.jsx';
// import registerServiceWorker from './registerServiceWorker';

// // ReactDOM.render( < App / > , document.getElementById('root'));
// ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById('root'));

registerServiceWorker();