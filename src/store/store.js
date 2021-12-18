import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { nftReducer } from './nft/nft.reducer.js';
import { userReducer } from './user/user.reducer.js';
import { walletReducer } from './wallet/wallet.reducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  nftModule: nftReducer,
  userModule: userReducer,
  walletModule: walletReducer,
  });

  export const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  