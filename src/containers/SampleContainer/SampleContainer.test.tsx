import { shallow } from 'enzyme';
import * as React from 'react';
import { SampleContainer } from './SampleContainer';

describe('connectする前のcomponentをテストする', () => {
    it('testing props', () => {
        const initialCount = 2;
        const wrapper = shallow(<SampleContainer count={initialCount} />);
        const count: string = wrapper.find('#test').text();
        expect(count).toEqual(`clickCount: ${initialCount}`);
    });
    it('clickを拾う', () => {
        const mockFunction = jest.fn();
        const wrapper = shallow(
            <SampleContainer count={0} increment={mockFunction} />,
        );
        wrapper.find('#test').simulate('click');
        expect(mockFunction.mock.calls.length).toEqual(1);
    });
});
