import { all, Effect } from 'redux-saga/effects';

import sampleSagas from './Sample';

export default function* rootSaga(): IterableIterator<Effect> {
    yield all([...sampleSagas]);
}
