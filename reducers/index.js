import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Router } from '~/routes';
import { routerReducer, createRouterMiddleware, initialRouterState } from 'connected-next-router'
import thunkMiddleware from 'redux-thunk'
import app from './app';
import modal from './modal';

const reducers = combineReducers({
  router: routerReducer,
  modal,
  app
})

const routerMiddleware = createRouterMiddleware({
  Router,
  methods: {
    push: 'pushRoute',
    replace: 'replaceRoute',
    prefetch: 'prefetchRoute',
  },
});


export function initializeStore (initialState = {}, options = {}) {
  if (options.asPath) {
    initialState.router = initialRouterState(options.asPath);
  }
  const devTools =
    process.env.NODE_ENV === 'production'
      ? applyMiddleware(...[routerMiddleware, thunkMiddleware])
      : composeWithDevTools(applyMiddleware(routerMiddleware), applyMiddleware(thunkMiddleware));

  return createStore(
    reducers,
    initialState,
    devTools
  )
}
