import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import getMissionsReducer from './missions/missions';

const reducers = combineReducers({ missions: getMissionsReducer });
const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
