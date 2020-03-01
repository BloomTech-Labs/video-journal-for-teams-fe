import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// - Reducers
import userReducer from "./reducers/userReducer";
import teamReducer from "./reducers/teamReducer";
import dataReducer from "./reducers/dataReducer";

const middleware = [thunk];

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['User', 'Team', 'Data']
 };

const userPersistConfig = {
  key: 'User',
  storage: storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['error', 'invite', 'imageUpload']
};

const teamPersistConfig = {
  key: 'Team',
  storage: storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['error']
};

const initialState = {};

const rootReducer = combineReducers({
  User: persistReducer(userPersistConfig, userReducer),
  Team: persistReducer(teamPersistConfig, teamReducer),
  Data: dataReducer,
});

const pReducer = persistReducer(rootPersistConfig, rootReducer);

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

export const store = createStore(pReducer, initialState, enhancer);

export const persistor = persistStore(store);
