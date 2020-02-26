import React from "react";

import { shallow, mount } from "enzyme";

// Mock redux store
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { RecordStream } from "../../../components/PostTeamVideo/RecordStream/RecordStream";
import StreamControls from "../../../components/PostTeamVideo/RecordStream/StreamControls";

const mockStore = configureStore({});

const mockNavigator = {
	getUserMedia: jest.fn((config) => {
		return new Promise((resolve, reject) => {
			resolve(true);
		});
	}),
};

global.navigator.mediaDevices = mockNavigator;

describe("<RecordStream>", () => {
	let store;
	let actions;
	let wrapper;

	beforeAll(() => {
		store = mockStore({
			User: {
				videoStream: {
					playback: false,
				},
			},
		});

		actions = {
			updateStreamObject: jest.fn(),
			updateStreamRaw: jest.fn(),
			toggleStreamPlayback: jest.fn(),
			setStreamError: jest.fn(),
		};
	});

	afterEach(() => {
		wrapper.unmount();
	});

	test("should render self without error", () => {
		wrapper = shallow(
			<Provider store={store}>
				<RecordStream {...actions} />
			</Provider>
		);
	});

	test("should render a video element", () => {
		wrapper = mount(
			<Provider store={store}>
				<RecordStream {...actions} />
			</Provider>
		);
		expect(wrapper.exists("video")).toBe(true);
	});

	test("should render <StreamControls> as a child component", () => {
		wrapper = mount(
			<Provider store={store}>
				<RecordStream {...actions} />
			</Provider>
		);

		expect(wrapper.exists(StreamControls)).toBe(true);
	});
});
