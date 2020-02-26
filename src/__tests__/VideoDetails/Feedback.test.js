import React from "react";

// Mock redux store
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { shallow, mount } from "enzyme";

import { Feedback } from "../../components/VideoDetails/Feedback";
import { FeedbackForm } from "../../components/VideoDetails/FeedbackForm";
import FeedbackTable from "../../components/VideoDetails/FeedbackTable";

const mockStore = configureStore({});

describe("<Feedback>", () => {
	let store;
	let actions;
	let wrapper;

	beforeAll(() => {
		store = mockStore({
			User: {
				videoDetailFocus: {
					feedback: {
						isSubmitting: false,
					},
				},
			},
		});

		actions = {
			fetchFeedback: jest.fn(),
		};
	});

	afterEach(() => {
		wrapper.unmount();
	});

	test("should render self without error", () => {
		wrapper = shallow(<Feedback />);
	});

	test("should render <FeedbackForm> if viewer is not owner", () => {
		const props = {
			loggedInUserId: 2,
			videoOwnerId: 1,
		};

		wrapper = mount(
			<Provider store={store}>
				<Feedback {...props} />
			</Provider>
		);

		expect(wrapper.exists(FeedbackForm)).toBe(true);
	});

	test("should render <FeedbackTable> if viewer is owner", () => {
		const props = {
			loggedInUserId: 1,
			videoOwnerId: 1,
		};

		wrapper = mount(
			<Provider store={store}>
				<Feedback {...props} fetchFeedback={jest.fn()} />
			</Provider>
		);

		expect(wrapper.exists(FeedbackTable)).toBe(true);
	});

	test("should fetch feedback for <FeedbackTable> if viewer is owner", () => {
		const props = {
			loggedInUserId: 1,
			videoOwnerId: 1,
		};

		wrapper = mount(
			<Provider store={store}>
				<Feedback {...props} {...actions} />
			</Provider>
		);

		expect(wrapper.exists(FeedbackTable)).toBe(true);

		expect(actions.fetchFeedback.mock.calls.length).toBe(1);
	});
});
