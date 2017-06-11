import { createStore, applyMiddleware } from 'redux';

// import createSagaMiddleware from 'redux-saga';
// import allSagas from '../modules/Saga-Root';

export default (initialState) => {

  // const sagaMiddleware = createSagaMiddleware();
    
  let baseStore = createStore(
    initialState,
    // applyMiddleware(sagaMiddleware)
  );
  console.log('baseStore', baseStore.getState());
  // sagaMiddleware.run( allSagas );

  return baseStore;
}