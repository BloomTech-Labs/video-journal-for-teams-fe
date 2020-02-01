import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchTeams } from "../redux/actions/teamActions";
import TeamCard from "./TeamCard";
import { Layout, Typography } from 'antd';

const { Title } = Typography;
const { Header, Content } = Layout;


const TeamList = props => {
	const [teams, setTeams] = useState([]);

	useEffect(() => {
		/* 
		Get video data from backend api
		using the user_id from redux state
		*/
		setTeams(MOCKDATA);
	}, [teams])

	// useEffect(() => {
	//     if (props.teams.length === 0) {
	//         console.log(props.teams)
	//         props.fetchTeams();
	//     }
	// }, [props, props.teams]);

	// if (props.teams.length === 0) {
	//     return <h2>Loading...</h2>;
	// } else {
	return (
		<Content className="userDashTeamList">
			{teams.map(data => {
				return <TeamCard key={data.id} data={data} />;
			})}
		</Content>
	);
	// }
};

// const mapStateToProps = state => {
//     return {
//         teams: state.teams,
//         isFetching: state.isFetching
//     };
// };

// export default connect(mapStateToProps, { fetchTeams })(TeamList);

const MOCKDATA = [
	{ "id": 1, "name": "Nitzsche-O'Hara", "description": "Struck by duck", "created_at": "2019-11-02 06:29:22", "updated_at": "2019-05-08 18:54:29" },
	{ "id": 2, "name": "Huels and Sons", "description": "Partial physeal arrest, left distal humerus", "created_at": "2019-07-18 09:44:45", "updated_at": "2019-05-08 18:54:29" },
	{ "id": 3, "name": "Bechtelar-Langworth", "description": "Bullous myringitis, bilateral", "created_at": "2019-12-30 11:39:26", "updated_at": "2019-12-27 19:54:22" },
	{ "id": 4, "name": "Marquardt Inc", "description": "Injury of right internal carotid artery, intracranial portion, not elsewhere classified with loss of consciousness of any duration with death due to brain injury prior to regaining consciousness, sequela", "created_at": "2019-12-23 19:49:31", "updated_at": "2019-10-04 02:23:04" },
	{ "id": 5, "name": "Hane and Sons", "description": "Burn of second degree of multiple right fingers (nail), including thumb, initial encounter", "created_at": "2019-09-24 13:21:49", "updated_at": "2019-08-23 07:52:24" },
	{ "id": 6, "name": "Corwin Group", "description": "Anaplastic large cell lymphoma, ALK-negative, unspecified site", "created_at": "2019-03-20 14:04:43", "updated_at": "2019-10-30 08:32:25" },
	{ "id": 7, "name": "Herzog and Sons", "description": "Congenital malformations of palate, not elsewhere classified", "created_at": "2019-01-27 03:38:07", "updated_at": "2019-08-01 23:55:43" },
	{ "id": 8, "name": "Trantow, Predovic and Beahan", "description": "Myositis ossificans traumatica, lower leg", "created_at": "2019-12-09 02:21:35", "updated_at": "2019-08-13 08:10:44" },
	{ "id": 9, "name": "Mills, Stoltenberg and Leuschke", "description": "Displaced fracture of medial condyle of right tibia, sequela", "created_at": "2019-08-20 20:04:11", "updated_at": "2019-05-02 17:38:17" },
	{ "id": 10, "name": "Casper and Sons", "description": "Hypothermia, not associated with low environmental temperature", "created_at": "2019-01-18 12:53:29", "updated_at": "2019-02-13 19:13:27" },
	{ "id": 11, "name": "Mann and Sons", "description": "Underdosing of other estrogens and progestogens", "created_at": "2019-06-10 12:53:51", "updated_at": "2019-06-30 14:40:08" },
	{ "id": 12, "name": "Metz-Schroeder", "description": "Primary blast injury of lung, unspecified", "created_at": "2019-07-05 13:26:02", "updated_at": "2019-05-31 15:56:14" },
	{ "id": 13, "name": "McClure-Terry", "description": "Drug-induced headache, not elsewhere classified, intractable", "created_at": "2019-02-18 06:47:00", "updated_at": "2019-09-29 03:30:24" },
	{ "id": 14, "name": "Connelly Group", "description": "Other and unspecified asthma", "created_at": "2019-06-16 10:26:32", "updated_at": "2019-06-06 19:49:27" },
	{ "id": 15, "name": "Zboncak-Osinski", "description": "Nondisplaced fracture of head of right radius, subsequent encounter for closed fracture with nonunion", "created_at": "2019-01-03 12:42:02", "updated_at": "2019-05-17 13:27:17" },
	{ "id": 16, "name": "Hahn Inc", "description": "Segmental fracture of shaft of tibia", "created_at": "2019-10-13 03:14:47", "updated_at": "2019-08-25 16:59:01" },
	{ "id": 17, "name": "Kreiger, Langworth and Beatty", "description": "Inflammatory polyps of colon with abscess", "created_at": "2019-10-21 07:58:55", "updated_at": "2019-11-16 17:46:48" },
	{ "id": 18, "name": "Kling Group", "description": "Acute embolism and thrombosis of other specified deep vein of left lower extremity", "created_at": "2019-10-26 18:56:03", "updated_at": "2019-08-05 23:32:57" },
	{ "id": 19, "name": "Fritsch-Buckridge", "description": "Insect bite (nonvenomous) of shoulder", "created_at": "2019-01-09 00:49:07", "updated_at": "2019-03-23 17:09:32" },
	{ "id": 20, "name": "Borer, Nienow and Kunde", "description": "Insect bite (nonvenomous) of unspecified shoulder, sequela", "created_at": "2019-01-30 10:29:39", "updated_at": "2019-10-14 18:46:29" }
]

export default TeamList;