import { applyMiddleware, createStore } from 'redux';

import reducer from '../reducers/reducer';
import middlewares from '../navigators/middleware';

const middleware = applyMiddleware(...middlewares);

export default createStore(reducer, middleware);