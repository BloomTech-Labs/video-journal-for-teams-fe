import React from "react";

import { shallow } from "enzyme";

import UploadModal from "../../../components/PostTeamVideo/UploadVideo/UploadModal";

import { Modal, Form, Input } from "antd";

jest.mock("react-router-dom", () => ({
	useHistory: () => ({
		goBack: jest.fn(),
	}),
	useParams: () => ({
		prompt_id: 1,
	}),
}));

describe("<UploadModal>", () => {
	let wrapper;

	afterEach(() => {
		wrapper.unmount();
	});

	test("should render self without error", () => {
		wrapper = shallow(<UploadModal />);
	});

	test("should render a <Modal> component", () => {
		wrapper = shallow(<UploadModal />).dive();

		expect(wrapper.exists(Modal)).toBe(true);
	});

	test("should render a <Form> with <Input>'s", () => {
		wrapper = shallow(<UploadModal />).dive();

		expect(wrapper.exists(Form)).toBe(true);
		expect(wrapper.exists(Input)).toBe(true);
	});
});
