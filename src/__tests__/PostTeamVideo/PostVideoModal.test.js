import React from "react";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { mount } from "enzyme";

import PostVideoModal from "../../components/PostTeamVideo/PostVideoModal";
import UploadVideo from "../../components/PostTeamVideo/UploadVideo/UploadVideo";

import { Modal } from "antd";

const mockStore = configureStore({});

jest.mock("react-router-dom", () => ({
	useHistory: () => ({
		goBack: jest.fn(),
	}),
	useParams: () => ({
		prompt_id: 1,
	}),
}));

describe("<PostVideoModal>", () => {
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
		wrapper = mount(
			<Provider store={store}>
				<PostVideoModal />
			</Provider>
		);
	});

	test("should render a <Modal> component", () => {
		wrapper = mount(
			<Provider store={store}>
				<PostVideoModal />
			</Provider>
		);

		expect(wrapper.exists(Modal)).toBe(true);
	});
});
