import React from "react";
import { render, getAllByText } from "@testing-library/react";
import { shallow, mount } from "enzyme";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

import { BrowserRouter as Router } from "react-router-dom";

import UserDashobard from "../pages/UserDashboard";
import { fetchUserTeams } from "../redux/actions/userActions";

const mockStore = configureStore([thunk]);

describe("Examining the User dashboard component", () => {
	it("should render without crashing", () => {
		shallow(
			<Provider store={mockStore(defaultStore)}>
				<UserDashobard />
			</Provider>
		);
	});

	it("renders add team button", () => {
		const userDash = mount(
			<Provider store={mockStore(defaultStore)}>
				<Router>
					<UserDashobard />
				</Router>
			</Provider>
		);
		expect(userDash.exists("button")).toBeTruthy();
	});

	it("should render 'Your Teams' on DOM", () => {
		const wrapper = mount(
			<Provider store={mockStore(defaultStore)}>
				<Router>
					<UserDashobard />
				</Router>
			</Provider>
		);
		const { getAllByText } = render(wrapper);
		getAllByText(/My Teams/i);
	});

	it("should render 'Your Videos' on DOM", () => {
		const wrapper = mount(
			<Provider store={mockStore(defaultStore)}>
				<Router>
					<UserDashobard />
				</Router>
			</Provider>
		);
		const { getAllByText } = render(wrapper);
		getAllByText(/My Videos/i);
	});

	const defaultStore = {
		User: {
			isLogged: true,
			userId: 1,
			first_name: "Curr",
			last_name: "Ladley",
			email: "asculpher0@independent.co.uk",
			username: "fwilloughley0",
			invite: {
				invite_code: null,
				invited_team_id: null,
				error: null,
			},
			error: null,
			isFetching: false,
			teams: [
				{
					id: 20,
					name: "Borer, Nienow and Kunde",
					description: "Insect bite (nonvenomous) of unspecified shoulder, sequela",
					created_at: "2019-01-30T15:29:39.000Z",
					updated_at: "2019-10-14T22:46:29.000Z",
					role_id: 2,
				},
				{
					id: 21,
					name: "New Team",
					description: "Awesome new team",
					created_at: "2020 - 02 - 12T17: 37: 10.139Z",
					updated_at: "2020 - 02 - 12T17: 37: 10.139Z",
					role_id: 2,
				},
			],
			videos: [
				{
					id: 9,
					owner_id: 1,
					title: "suspendisse potenti",
					description:
						"nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris",
					created_at: "2019 - 09 - 27T07: 53: 14.000Z",
					updated_at: "2019 - 10 - 02T04: 31: 10.000Z",
					video_url: "https://www.youtube.com/embed/6Gw5dK48MtI",
					prompt_id: 22,
				},
				{
					id: 19,
					owner_id: 1,
					title: "primis",
					description: "rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis",
					created_at: "2019-05-31T09:24:43.000Z",
					updated_at: "2019-10-28T01:15:43.000Z",
					video_url: "https://www.youtube.com/embed/LQMLFryA_7k",
					prompt_id: 10,
				},
			],
			videoDetailFocus: {
				feedback: [],
			},
		},
	};
});
