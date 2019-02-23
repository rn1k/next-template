import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../../src/reducers';

import { storiesOf } from '@storybook/react';

import SampleContainer from '../../../src/containers/SampleContainer/SampleContainer';
import IState from '../../../src/IState';

const initialState: IState = {
    sampleState: {
        sample: 1,
    },
};

const store = createStore(reducer, initialState);

storiesOf('SampleContainer', module).add('with text', () => (
    <Provider store={store}>
        <SampleContainer />
    </Provider>
));
