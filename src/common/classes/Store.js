import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from '../containers/App/appReducer';

/**
* Global store object.
*/
export let store = null; // placeholder for store singleton once created

/**
 * Gets reducers objects.
 *
 * @return {Object} Reducers by default
 */
export function getInitialReducers() {
    return {
        app: appReducer
    };
}

/**
 * Initializes store object.
 *
 * @param  {Object} initialReducers Initial reducers
 * @param  {Object} initialState    Initial state
 * @return {Object}                 Store object
 */
export function initStore(initialReducers = {}, initialState = {}) {
    store = createStore(combineReducers(initialReducers), initialState, applyMiddleware(thunkMiddleware));
    return store;
}
