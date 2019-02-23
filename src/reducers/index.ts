import { combineReducers } from 'redux';

import sampleReducer from './Sample';

const reducer = combineReducers({
    sampleState: sampleReducer,
});

export default reducer;
