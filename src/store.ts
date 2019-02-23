import { applyMiddleware, createStore } from 'redux';
// import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import IState from 'IState';
import reducer from './reducers';
import rootSaga from './sagas';

export default function configureStore(initialState: IState) {
    const sagaMiddleware = createSagaMiddleware();
    // const logger = createLogger();
    const middleware = applyMiddleware(
        // logger,
        sagaMiddleware,
    );
    const store: any = createStore(reducer, initialState, middleware);
    store.runSagaTask = () => {
        store.sagaTask = sagaMiddleware.run(rootSaga);
    };
    store.runSagaTask();

    return store;
}
