import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { nftReducer } from './nft/nft.reducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  nftModule: nftReducer,
  });

  export const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  