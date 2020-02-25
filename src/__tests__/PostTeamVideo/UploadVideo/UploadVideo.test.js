import React from "react";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { shallow, mount } from "enzyme";

import UploadVideo from "../../../components/PostTeamVideo/PlaybackStream/PlaybackControls";
import UploadModal from "../../../components/PostTeamVideo/UploadVideo/UploadModal";

import { Button } from "antd";

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

	test("should have an upload video button", () => {
		wrapper = shallow(<UploadVideo />);

		expect(wrapper.exists(Button)).toBe(true);
	});

	test("should have <UploadModal> as a child component", () => {
		wrapper = mount(
			<Provider store={store}>
				<UploadVideo />
			</Provider>
		);

		expect(wrapper.exists(UploadModal)).toBe(true);
	});
});
