[![Maintainability](https://api.codeclimate.com/v1/badges/9f724287cf9c5243b8d2/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/video-journal-for-teams-fe/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/9f724287cf9c5243b8d2/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/video-journal-for-teams-fe/test_coverage)

# Video Journal For Teams | Alpaca Videos!

Project deployed here: [https://www.alpacavids.com]

Staging site deployed here: [https://staging.alpacavids.com]

## Contributors

|                                            [Kerri-Ann Bates](https://github.com/Kerri-AnnBates)                                            |                                             [Michael Nunes](https://github.com/TinySquid)                                             |                                             [Sofia Levin](https://github.com/sofialevin/)                                              |                                                                                  [Darrin Lowery](https://github.com/ogrotten)                                                                                   |                                         [Sam Allen](https://github.com/allensam88)                                          |
| :----------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: |
|        [<img src="https://avatars0.githubusercontent.com/u/18246524?s=460&v=4" width = "200" />](https://github.com/Kerri-AnnBates)        | [<img src="https://avatars2.githubusercontent.com/u/13441400?s=460&v=4" width = "200" width = "200" />](https://github.com/TinySquid) | [<img src="https://avatars1.githubusercontent.com/u/8367070?s=460&v=4" width = "200" width = "200" />](https://github.com/sofialevin/) | [<img src="https://media-exp1.licdn.com/dms/image/C5603AQFhuYjzAGmDdw/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=Ot5Nj4Qnu5FU6XkMFHlL1KhmWo48HxvmlYgcoX2LcdA" />](https://github.com/ogrotten) |  [<img src="https://avatars2.githubusercontent.com/u/54912919?s=460&v=4" width = "200" />](https://github.com/allensam88)   |
|                        [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Kerri-AnnBates)                         |                        [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/TinySquid)                         |                        [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/sofialevin/)                        |                                                              [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/ogrotten)                                                              |                   [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/allensam88)                   |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/kerri-ann-bates-0b4970129/) |      [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/miketnunes/)      | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/sofia-levin-a6960682/)  |                                     [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/darrin-lowery-70860867/)                                     | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/samallen79/) |

<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/b5c4db1c-b10d-42c3-b157-3746edd9e81d/deploy-status)](https://app.netlify.com/sites/alpacavids/overview)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Project Overview

Tagline: It's how you asynchronously record and store practice videos for interviews then get feedback from team members.

[Trello Board](https://trello.com/b/GbkgxMJV/labs-20-video-journal-for-teams)

[Product Canvas](https://www.notion.so/Video-Journal-for-Teams-6388875366074df4a553b884c848f02e)

[UX Figma Design](https://www.figma.com/file/IEa7YKW4aIgoD7W12AfoyE/Video-Journal%2C-Kyla-O.?node-id=545%3A0)

[UX InVision Prototype](https://projects.invisionapp.com/share/HZVSXPTM9NF#/screens)

### Key Features

- Login/Register with Passport
- User Dashboard: shows the teams you joined and your videos
- Team Dashboard: shows the team members, interview prompt questions, and team videos
- Video Viewer: plays a video and allows members to provide feedback / view feedback
- Update User Profile capability
  - User can update their account info
- Team Manager can manage teams
  - Modify regular team member role to manager role / vice versa
  - Invite / Remove members from team
- Create new video prompts
- Video Recording
  - Videos can be recorded in-app and uploaded (posted) to a team
- Video Storage / Streaming

## Tech Stack

### Front End built using: React

Front End libraries and dependencies can be found in package.json, but major highlights are:

- Redux
- Redux-Persist
- Axios
- Ant Design / node-sass for the UI

Testing is handled by jest / react-testing-library / enzyme / redux-mock-store

### [Back End](https://github.com/Lambda-School-Labs/video-journal-for-teams-be) built using: Node

Back End production pipeline deployed at [Heroku-Production](https://video-journal.herokuapp.com/)

Back End staging pipeline deployed at [Heroku-Staging](https://video-journal-staging.herokuapp.com/)

List of major Back End dependencies:

- Express
- Knex
- Postgres
- Helmet
- Cors
- Passport
- bcrypt
- jsonwebtoken

Testing is done with jest / supertest
Development server is run with nodemon

# APIs

Our API does not rely on third parties nor requires any external services

# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

- REACT_APP_ENV='development'
- REACT_APP_FRONT_END_URL='https://alpacavids.com/'
- REACT_APP_PRODUCTION_URL = 'https://video-journal.herokuapp.com/api/'
- REACT_APP_STAGING_URL = 'https://video-journal-staging.herokuapp.com/api/'
- REACT_APP_LOCAL_HOST = 'http://localhost:5000/api/'

- REACT_APP_PUBLIC_URL_PRODUCTION = "https://video-journal.herokuapp.com/public"
- REACT_APP_PUBLIC_URL_STAGING = "https://video-journal-staging.herokuapp.com/public"
- REACT_APP_PUBLIC_URL_LOCAL_HOST = "http://localhost:5000/public"

# Testing

Jest testing environment along with Enzyme dev dependency for testing React-Redux

# Installation Instructions

Packages can be installed locally with either: yarn install or npm install.

## Scripts

- **npm run build** used on Netlify deployment

Can be ran with either yarn or npm.

- **start**: to render a local development browser,
- **test** to run local tests
- **coverage** to generate test coverage report with jest

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/Lambda-School-Labs/video-journal-for-teams-be) for details on the backend of our project.
