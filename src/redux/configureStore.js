import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import getMissionsReducer from './missions/missions';

const reducers = combineReducers({ missions: getMissionsReducer });
const store = createStore(reducers, applyMiddleware(logger));

export default store;
