import React from "react";
import { render } from '@testing-library/react';
import { shallow, mount } from "enzyme";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

import { BrowserRouter as Router } from "react-router-dom";

import TeamDashboard from "../pages/TeamDashboard";

const mockStore = configureStore([thunk]);

describe("Team Dashboard Page", () => {
	it("should render without crashing", () => {
		shallow(
			<Provider store={mockStore(defaultStore)}>
				<TeamDashboard />
			</Provider>
		);
	});

	it("should render user initials", () => {
		const wrapper = mount(
			<Provider store={mockStore(defaultStore)}>
				<Router>
					<TeamDashboard />
				</Router>
			</Provider>
		);
		const { getByText } = render(wrapper)
		getByText(/CL/i)
	});

	it("should render team name", () => {
		const wrapper = mount(
			<Provider store={mockStore(defaultStore)}>
				<Router>
					<TeamDashboard />
				</Router>
			</Provider>
		);
		const { getByText } = render(wrapper)
		getByText(/Nitzsche-O'Hara/i)
	});

	it("should render members list header", () => {
		const wrapper = mount(
			<Provider store={mockStore(defaultStore)}>
				<Router>
					<TeamDashboard />
				</Router>
			</Provider>
		);
		const { getByText } = render(wrapper)
		getByText(/Members/i)
	});

	it("should render prompts list header", () => {
		const wrapper = mount(
			<Provider store={mockStore(defaultStore)}>
				<Router>
					<TeamDashboard />
				</Router>
			</Provider>
		);
		const { getByText } = render(wrapper)
		getByText(/Prompts/i)
	});

	const defaultStore = {
		User: {
			id: 1,
			email: "asculpher0@independent.co.uk",
			username: "fwilloughley0",
			first_name: "Curr",
			last_name: "Ladley",
			avatar: null
		},

		Team: {
			team: {
				id: 1,
				name: "Nitzsche-O'Hara",
				description: "Struck by duck",
				created_at: "2019-11-02T13:29:22.000Z",
				updated_at: "2019-05-09T01:54:29.000Z",
				avatar: null
			},
			teamMembers: [{
				team_name: "Nitzsche-O'Hara",
				user_id: 15,
				role_id: 1,
				user_full_name: "Idalina Cearley"
			},
			{
				team_name: "Nitzsche-O'Hara",
				user_id: 23,
				role_id: 1,
				user_full_name: "Kerwinn Rarity"
			},
			{
				team_name: "Nitzsche-O'Hara",
				user_id: 26,
				role_id: 2,
				user_full_name: "Dunstan Ells"
			},
			{
				team_name: "Nitzsche-O'Hara",
				user_id: 37,
				role_id: 1,
				user_full_name: "Myrwyn Spellicy"
			},
			{
				team_name: "Nitzsche-O'Hara",
				user_id: 41,
				role_id: 2,
				user_full_name: "Brandice Drury"
			},
			{
				team_name: "Nitzsche-O'Hara",
				user_id: 56,
				role_id: 1,
				user_full_name: "Candide Bouchard"
			}],
			teamPromptsAndVideos: [
				{
					id: 1,
					question: "Tell me a little about yourself.",
					description: "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
					team_id: 1,
					created_at: "2019-03-07T09:33:02.000Z",
					updated_at: "2019-04-22T20:16:51.000Z",
					videos: [
						{
							prompt_id: 1,
							video_id: 81,
							video_url: "https://www.youtube.com/embed/fc3c3OrpKSI",
							title: "porttitor lacus at turpis donec",
							created_at: "2019-08-03T16:51:48.000Z",
							user_full_name: "Myrwyn Spellicy"
						},
						{
							prompt_id: 1,
							video_id: 51,
							video_url: "https://www.youtube.com/embed/6Gw5dK48MtI",
							title: "massa tempor convallis nulla",
							created_at: "2019-02-25T03:37:02.000Z",
							user_full_name: "Selinda Tritton"
						},
						{
							prompt_id: 1,
							video_id: 52,
							video_url: "https://www.youtube.com/embed/ssR-RguvjHo",
							title: "in leo maecenas",
							created_at: "2019-10-09T06:45:43.000Z",
							user_full_name: "Augie Tomasz"
						},
						{
							prompt_id: 1,
							video_id: 70,
							video_url: "https://www.youtube.com/embed/6Gw5dK48MtI",
							title: "primis",
							created_at: "2019-08-17T17:06:04.000Z",
							user_full_name: "Gizela Dufer"
						},
						{
							prompt_id: 1,
							video_id: 40,
							video_url: "https://www.youtube.com/embed/LQMLFryA_7k",
							title: "lacus morbi",
							created_at: "2019-12-10T00:27:05.000Z",
							user_full_name: "Claire Meagh"
						}
					]
				},
				{
					id: 2,
					question: "Why did you decide to get into _track_ and become a _role_?",
					description: "Suspendisse ornare consequat lectus.",
					team_id: 1,
					created_at: "2019-06-27T06:51:56.000Z",
					updated_at: "2019-08-12T16:21:58.000Z",
					videos: [
						{
							prompt_id: 2,
							video_id: 20,
							video_url: "https://www.youtube.com/embed/ssR-RguvjHo",
							title: "id consequat in consequat ut",
							created_at: "2019-12-24T12:19:42.000Z",
							user_full_name: "Valera Corking"
						},
						{
							prompt_id: 2,
							video_id: 79,
							video_url: "https://www.youtube.com/embed/13zN4-MVM9g",
							title: "vivamus",
							created_at: "2019-11-09T14:55:29.000Z",
							user_full_name: "Patrice Cornthwaite"
						},
						{
							prompt_id: 2,
							video_id: 10,
							video_url: "https://www.youtube.com/embed/LQMLFryA_7k",
							title: "mauris eget",
							created_at: "2019-12-10T04:19:39.000Z",
							user_full_name: "Natalee Wyllis"
						}
					]
				}
			],
			deleteUserCount: 0,
			inviteLink: {
				msg: "Update of expired or invalid successful",
				id: 1,
				team_id: 1,
				link: "NitzscheO'Hara-BetaOmegaAlpha",
				isValid: true,
				created_at: "2020-01-09T22:30:39.000Z",
				expires_at: "2020-02-14T01:40:11.954Z"
			}
		},
	};
});