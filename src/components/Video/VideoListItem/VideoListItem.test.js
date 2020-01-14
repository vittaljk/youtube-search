import React from "react";
import { video } from '../../../model/video';
import VideoListItem from './VideoListItem';

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe('<VideoListItem />', () => {
    it('should render <VideoListItem/> when receiving video', () => {
        const wrapper = shallow(<VideoListItem />);
        wrapper.setProps({video});
        expect(wrapper.find('.item')).toHaveLength(1);
    });
});