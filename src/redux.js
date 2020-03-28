import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import rootSaga from './sagas';
import rootReducer from './reducers';
import authMiddleware from './middlewares/auth.middleware';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(authMiddleware),
  applyMiddleware(sagaMiddleware),
);

export const store = createStore(persistedReducer, enhancer);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
