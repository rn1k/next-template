import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as Action from '../actions/Sample';

export interface ISampleState {
    sample: number;
}

export const initialState: ISampleState = { sample: 0 };

const sampleReducer = reducerWithInitialState(initialState)
    .case(Action.add, (state, payload) => ({
        ...state,
        sample: state.sample + payload.amount,
    }))
    .case(Action.decrement, state => ({
        ...state,
        sample: state.sample - 1,
    }))
    .case(Action.increment, state => {
        return {
            ...state,
            sample: state.sample + 1,
        };
    });

export default sampleReducer;
