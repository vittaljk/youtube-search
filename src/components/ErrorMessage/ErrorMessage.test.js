import React from "react";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ErrorMessage from './ErrorMessage';

Enzyme.configure({ adapter: new Adapter() });

describe('<ErrorMessage />', () => {
    var wrapper;

    beforeEach(() => {
        wrapper = shallow(<ErrorMessage />);
    })

    it('should render when show props is true', () => {
        wrapper.setProps({show: true});
        expect(wrapper.find('.error-container')).toHaveLength(1);
    });

    it(`doesn't break when video show props is false`, () => {
        expect(wrapper.find('.error-container')).toHaveLength(0);
    })
});