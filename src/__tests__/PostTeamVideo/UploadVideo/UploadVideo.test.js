import React from "react";

import configureStore from "redux-mock-store";

import { shallow } from "enzyme";

import UploadVideo from "../../../components/PostTeamVideo/UploadVideo/UploadVideo";

import { Form, Input } from "antd";

const mockStore = configureStore({});

jest.mock("react-router-dom", () => ({
	useHistory: () => ({
		push: jest.fn(),
		goBack: jest.fn(),
	}),
	useParams: () => ({
		id: 1,
		match: "",
	}),
}));

describe("<UploadVideo>", () => {
	let store;
	let wrapper;

	beforeAll(() => {
		store = mockStore({
			User: {
				videoStream: {
					raw: null,
				},
			},
		});
	});

	afterEach(() => {
		wrapper.unmount();
	});

	test("should render self without error", () => {
		wrapper = shallow(<UploadVideo />);
	});

	test("should render a <Form> with <Input>'s", () => {
		wrapper = shallow(<UploadVideo />).dive();

		expect(wrapper.exists(Form)).toBe(true);
		expect(wrapper.exists(Input)).toBe(true);

	});
});
