import React from "react";

import { shallow } from "enzyme";

import VideoPlayer from "../../components/VideoDetails/VideoPlayer";

describe("<VideoPlayer>", () => {
	const video = { video_title: "Test", owner_name: "Test Owner", created_at: new Date(Date.now()) };

	test("should render without crashing", () => {
		shallow(<VideoPlayer video={video} />);
	});

	test("should have header", () => {
		const wrapper = shallow(<VideoPlayer video={video} />);
		expect(wrapper.exists("h2")).toBe(true);
		expect(wrapper.exists("h4")).toBe(true);
	});

	test("should have video player element", () => {
		const wrapper = shallow(<VideoPlayer video={video} />);
		expect(wrapper.exists("video")).toBe(true);
	});
});
