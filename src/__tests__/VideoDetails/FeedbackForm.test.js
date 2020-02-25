import React from "react";

import { shallow, mount } from "enzyme";

import { FeedbackForm } from "../../components/VideoDetails/FeedbackForm";

describe("<FeedbackForm>", () => {
	let wrapper;

	afterEach(() => {
		wrapper.unmount();
	});

	test("should render self without error", () => {
		wrapper = shallow(<FeedbackForm />);
	});

	test("should have a form w/ text area element", () => {
		wrapper = mount(<FeedbackForm />);

		expect(wrapper.exists("form")).toBe(true);
		expect(wrapper.exists("textarea")).toBe(true);
	});

	test("form only submits when textArea contains feedback", () => {
		const mockFormSubmit = jest.fn();

		wrapper = mount(<FeedbackForm submitFeedback={mockFormSubmit} />);

		const textEvent = {
			target: {
				value: "Hello World",
				name: "post",
			},
		};

		wrapper.find("textarea").simulate("change", textEvent);

		wrapper.find("form").simulate("submit");

		expect(mockFormSubmit).toHaveBeenCalled();
	});
});
