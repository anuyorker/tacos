import { createStore, combineReducers, applyMiddleware } from 'redux';
import tacosReducer from './reducers/tacos';
import thunkMiddleware from 'redux-thunk';

/*
ideal store state shape
{
  tacos: []
}
*/
const rootReducer = combineReducers({
  tacos: tacosReducer
});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
