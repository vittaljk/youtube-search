import React from "react";
import { video } from '../../../model/video';
import VideoDetail from './VideoDetail';

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe('<VideoDetail />', () => {
    var wrapper;
    beforeEach(() => {
        wrapper = shallow(<VideoDetail />);
    });

    it('should render <VideoDetail/> when receiving selectedVideo', () => {
        wrapper.setProps({ video });
        expect(wrapper.find('.video-detail')).toHaveLength(1);
    });

    it(`doesn't break when selectedVideo is null`, () => {
        wrapper.setProps({ video: null });
        expect(wrapper.find('.video-detail')).toHaveLength(0);
    })
});