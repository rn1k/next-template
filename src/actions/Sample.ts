import actionCreatorFactory from 'typescript-fsa';

export interface ISampleActionPayload {
    amount: number;
}

const actionCreator = actionCreatorFactory();

export const add = actionCreator<ISampleActionPayload>('ADD');
export const decrement = actionCreator('DECREMENT');
export const increment = actionCreator('INCREMENT');
