import React from "react";

import { shallow } from "enzyme";

import PlaybackControls from "../../../components/PostTeamVideo/PlaybackStream/PlaybackControls";
import DownloadVideo from "../../../components/PostTeamVideo/DownloadVideo";

import { Button } from "antd";

describe("<PlaybackControls>", () => {
	let wrapper;

	afterEach(() => {
		wrapper.unmount();
	});

	test("should render self without error", () => {
		wrapper = shallow(<PlaybackControls />);
	});

	test("should have a toggle playback button", () => {
		wrapper = shallow(<PlaybackControls />);

		expect(wrapper.exists(Button)).toBe(true);
	});

	test("should have <DownloadVideo> as a child component", () => {
		wrapper = shallow(<PlaybackControls />);

		expect(wrapper.exists(DownloadVideo)).toBe(true);
	});
});
