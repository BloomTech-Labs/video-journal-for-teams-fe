import React from "react";

import { shallow } from "enzyme";

import StreamControls from "../../../components/PostTeamVideo/RecordStream/StreamControls";

import { Button } from "antd";

describe("<Feedback>", () => {
	test("should render self without error", () => {
		shallow(<StreamControls />);
	});

	test("should render buttons for start/stop/pause/resume/toggle feed", () => {
		const wrapper = shallow(<StreamControls />);

		expect(wrapper.find(Button)).toHaveLength(5);
	});
});
