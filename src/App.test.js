import React from "react";
import ReactDOM from "react-dom";
import App from './App.js';
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
const searchText = 'surffing';
const youtube = require('./api/youtube');

describe('<App /> loading', () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})

describe('<SearchBar />', () => {
    it('simulating search bar input', async () => {
        const wrapper = mount(<App />);
        wrapper.find('input').simulate('change', { target: { value: searchText } });
        expect(wrapper.find("input").instance().value).toEqual(searchText);

        // invoke search handler
    })
})