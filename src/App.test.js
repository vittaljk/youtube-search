import React from "react";
import ReactDOM from "react-dom";
import App from './App.js';
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
const searchText = 'surffing';


describe('<App /> loading', () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})

describe('<SearchBar />', () => {
    var wrapper;
    beforeEach(() => {
        wrapper = mount(<App />);
        wrapper.find('input').simulate('change', { target: { value: searchText } });
    });

    it('Should update the value when onChange is called', () => {
        expect(wrapper.find("input").instance().value).toEqual(searchText);
    });

    it('video list should be rendered on searchbar input update', () => {
        expect(wrapper.find('.video-list')).toHaveLength(1);
    });
})