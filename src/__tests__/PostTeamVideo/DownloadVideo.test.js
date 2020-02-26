import React from "react";

import { shallow } from "enzyme";

import { DownloadVideo } from "../../components/PostTeamVideo/DownloadVideo";

import { Button } from "antd";

describe("<DownloadVideo>", () => {
	let wrapper;

	afterEach(() => {
		wrapper.unmount();
	});

	test("should render self without error", () => {
		wrapper = shallow(<DownloadVideo />);
	});

	test("should have a download button", () => {
		wrapper = shallow(<DownloadVideo />);

		expect(wrapper.exists(Button)).toBe(true);
	});

	test("should have a hidden anchor element to hold download blob ref", () => {
		wrapper = shallow(<DownloadVideo />);

		expect(wrapper.exists("a")).toBe(true);
	});
});
