import { put, takeEvery } from 'redux-saga/effects';
import * as Action from '../../actions/Sample';

export function* sampleAction(): IterableIterator<any> {
    // ここで非同期処理を挟む
    // const { payload, error }: ISample = yield call(sampleRequest);
    const payload = {
        amount: 1,
    };
    yield put({ payload, type: Action.add });
}

const sampleSagas = [takeEvery(Action.increment, sampleAction)];

export default sampleSagas;
