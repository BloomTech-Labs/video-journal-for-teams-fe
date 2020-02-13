import React from "react";
import { shallow, mount } from "enzyme";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

import { BrowserRouter as Router } from "react-router-dom";

import VideoDetails from "../pages/VideoDetails";

const mockStore = configureStore([thunk]);

describe("VideoDetails Page", () => {
	const defaultStore = {
		User: {
			userId: 1,
			videoDetailFocus: {
				id: 1,
				owner_id: 50,
				video_title: "sed sagittis nam",
				video_description: "parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien",
				video_url: "https://www.youtube.com/embed/6Gw5dK48MtI",
				created_at: "2019-11-06T19:36:53.000Z",
				prompt_question: "What are your biggest strengths?",
				owner_name: "Glenda Arlidge",
				feedback: [
					{
						id: 39,
						post:
							"sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero",
						video_id: 1,
						owner_id: 3,
						created_at: "2019-06-06T12:27:13.000Z",
						updated_at: "2019-12-18T01:26:36.000Z",
					},
				],
			},
			isFetching: false,
		},
	};

	it("should render without crashing", () => {
		shallow(
			<Provider store={mockStore(defaultStore)}>
				<VideoDetails />
			</Provider>
		);
	});

	it("should render feedback table when viewer is owner", () => {
		const viewerIsOwnerStore = {
			...defaultStore,
		};
		defaultStore.User.videoDetailFocus.owner_id = 1;

		const wrapper = mount(
			<Provider store={mockStore(viewerIsOwnerStore)}>
				<Router>
					<VideoDetails />
				</Router>
			</Provider>
		);

		expect(wrapper.exists("table")).toBeTruthy();
	});

	it("should render feedback form when viewer is not the owner", () => {
		defaultStore.User.videoDetailFocus.owner_id = 99;

		const wrapper = mount(
			<Provider store={mockStore(defaultStore)}>
				<Router>
					<VideoDetails />
				</Router>
			</Provider>
		);

		expect(wrapper.exists("form")).toBeTruthy();
	});
});
