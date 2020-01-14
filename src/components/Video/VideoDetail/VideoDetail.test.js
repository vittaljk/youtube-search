import React from "react";
import { video } from '../../../model/video';
import VideoDetail from './VideoDetail';

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe('<VideoDetail />', () => {
    it('should render <VideoDetail/> when receiving selectedVideo', () => {
        const wrapper = shallow(<VideoDetail />);
        wrapper.setProps({ video});
        expect(wrapper.find('.video-detail')).toHaveLength(1);
    });
});