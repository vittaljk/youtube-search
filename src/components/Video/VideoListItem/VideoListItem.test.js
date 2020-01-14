import React from "react";
import { video } from '../../../model/video';
import VideoListItem from './VideoListItem';

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe('<VideoListItem />', () => {
    var wrapper;
    beforeEach(() => {
        wrapper = shallow(<VideoListItem />);
    })
    it('should render <VideoListItem/> when receiving video', () => {
        wrapper.setProps({video});
        expect(wrapper.find('.item')).toHaveLength(1);
    });

    it(`doesn't break when video object is null`, () => {
        wrapper = shallow(<VideoListItem/>);
        wrapper.setProps({video: null});
        expect(wrapper.find('.item')).toHaveLength(0);
    });
});