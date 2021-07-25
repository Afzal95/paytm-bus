import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/authReducer";
import { busDetailsReducer } from "./BookBus/reducer";
import { updateFilterDetailsReducer } from "./FilterAndSort/reducer";
import { routesReducer } from "./routes/routesReducer";
const rootReducer = combineReducers({
  authReducer,
  busDetailsReducer,
  updateFilterDetailsReducer,
  routesReducer,
});

const customMiddleware = (store) => (next) => (action) => {
  return typeof action === "function" ? action(store.dispatch) : next(action);
};

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  createComposer(applyMiddleware(customMiddleware))
);
