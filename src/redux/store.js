import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// - Reducers
import userReducer from "./reducers/userReducer";
import teamReducer from "./reducers/teamReducer";
import dataReducer from "./reducers/dataReducer";

const middleware = [thunk];

const initialState = {};

const rootReducer = combineReducers({
  User: userReducer,
  Team: teamReducer,
  Data: dataReducer,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducer, initialState, enhancer);

export default store;
