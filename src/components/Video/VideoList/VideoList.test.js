import React from "react";
import { videos } from '../../../model/video';
import VideoList from './VideoList';

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe('<VideoList />', () => {
    it('should render <VideoList/> when receiving videos', () => {
        const wrapper = shallow(<VideoList />);
        wrapper.setProps({videos});
        expect(wrapper.find('.video-list')).toHaveLength(1);
    });
});