import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/home-page/HomePage';
import HousePage from './components/pages/house-page/HousePage';
import LoadingIndicator from './components/loading-indicator/LoadingIndicator';
import { fetchHousesApi } from './housesApi';
import { FETCH_HOUSES_URL, FETCHED_HOUSES_AMOUNT } from './utils/variables';
import './App.scss';

const App = () => {
  const [housesInfo, setHousesInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHouses = () => {
    setLoading(true);
    fetchHousesApi(FETCH_HOUSES_URL)
      .then(response => {
        setHousesInfo(response.slice(0, FETCHED_HOUSES_AMOUNT));
        setLoading(false);
      })
      .catch(() => {
        throw new Error("Couldn't fetch this url. Please try later");
      })
  }

  useEffect(() => {
    fetchHouses();
  }, []);

  const ComponentByLoadingValue = loading 
    ? <LoadingIndicator /> 
    : <HomePage houses={housesInfo}/>

  return (
    <div className='app__container'>
      <h1 className='app__header'>Our Latest Developments</h1>
      <div className='app__content-wrapper'>
        <Switch>
          <Route exact path='/'>
            { ComponentByLoadingValue }
          </Route>
          <Route 
            exact 
            path='/details/:id' 
            render={({ match }) => {
              const { id } = match.params;
              return <HousePage houseId={id}/>
            }}
            />
        </Switch>
      </div>
    </div>
  );
};

export default App;
