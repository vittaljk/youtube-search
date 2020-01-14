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

describe('Search results in VideoList component', () => {
    var wrapper;

    beforeEach(() => {
        wrapper = shallow(<VideoList/>);
    });

    it('renders search list', () => {
        wrapper.setProps({videos});
        expect(wrapper).toMatchSnapshot();
    });

    it('returns default empty array when there is no data to map through', () => {
        wrapper = shallow(<VideoList/>);
        wrapper.setProps({videos: []});
        expect(wrapper).toMatchSnapshot();
    });

    it(`doesn't break when videos are empty`, () => {
        wrapper = shallow(<VideoList/>);
        wrapper.setProps({videos: []});
        expect(wrapper.find('.item-wrapper')).toHaveLength(0);
    });
});