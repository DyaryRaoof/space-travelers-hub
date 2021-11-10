import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import getMissionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';

const reducers = combineReducers({ missionsReducer: getMissionsReducer, rocketsReducer });
const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
