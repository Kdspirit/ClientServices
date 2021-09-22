import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';

import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import ServiceDetail from './components/ServiceDetails/ServiceDetail';
import IndustriesDetail from './components/IndustriesDetail/IndustriesDetail';



function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
      <Switch>
        <div className="app-container">
          
        <Route exact path="/" component={Dashboard} />
          <Route path="/service-detail" component={ServiceDetail} />
          <Route path="/industry-detail" component={IndustriesDetail} />
          {/* <Route path="/home" component={Dashboard} /> */}

        </div>
      </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
