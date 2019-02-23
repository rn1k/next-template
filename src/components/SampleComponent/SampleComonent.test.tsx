/* eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';

import SampleComponent from './SampleComponent';

describe('SampleComponent', () => {
    const wrapper = shallow(
        <SampleComponent
            id="CarAvailability"
            name="is_available"
            value="yes"
            label="Is this car available?"
        />,
    );
    it('renders the checkbox with correct label', () => {
        expect(
            wrapper
                .find('.SampleComponent')
                .find('label')
                .text(),
        ).toEqual('Is this car available?');
    });
    it('renders the checkbox with correct label', () => {
        expect(wrapper.find('input').props().value).toEqual('yes');
    });
});
