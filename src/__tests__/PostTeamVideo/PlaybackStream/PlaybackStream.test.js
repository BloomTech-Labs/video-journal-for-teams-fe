import React from "react";

import { shallow, mount } from "enzyme";

// Mock redux store
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import PlaybackStream from "../../../components/PostTeamVideo/PlaybackStream/PlaybackStream";
import PlaybackControls from "../../../components/PostTeamVideo/PlaybackStream/PlaybackControls";

const mockStore = configureStore({});

jest.mock("react-router-dom", () => ({
	useHistory: () => ({}),
	useParams: () => ({}),
}));

describe("<PlaybackStream>", () => {
	let store;
	let wrapper;

	beforeAll(() => {
		store = mockStore({
			User: {
				videoStream: {
					playback: true,
				},
			},
		});
	});

	afterEach(() => {
		wrapper.unmount();
	});

	test("should render self without error", () => {
		wrapper = shallow(
			<Provider store={store}>
				<PlaybackStream />
			</Provider>
		);
	});

	test("should render a video element", () => {
		wrapper = mount(
			<Provider store={store}>
				<PlaybackStream />
			</Provider>
		);
		expect(wrapper.exists("video")).toBe(true);
	});
	test("should render <PlaybackControls> as a child component when playback is true", () => {
		wrapper = mount(
			<Provider store={store}>
				<PlaybackStream />
			</Provider>
		);
		expect(wrapper.exists(PlaybackControls)).toBe(true);
	});
});
