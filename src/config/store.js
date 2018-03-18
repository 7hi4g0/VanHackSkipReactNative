import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from '../reducers/reducer';
import middlewares from '../navigators/middleware';

const middleware = applyMiddleware(thunkMiddleware, ...middlewares);

export default createStore(reducer, middleware);