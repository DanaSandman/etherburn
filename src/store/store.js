import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { nftReducer } from './nft/nft.reducer.js';
import { userReducer } from './user/user.reducer.js';
import { contractReducer } from './contract/contract.reducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  nftModule: nftReducer,
  userModule: userReducer,
  contractModule: contractReducer,
  });

  export const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  