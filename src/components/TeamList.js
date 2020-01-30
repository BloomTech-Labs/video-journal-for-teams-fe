import React, { useEffect } from "react";
import { connect } from "react-redux";
import TeamCard from "./TeamCard";
import { fetchTeams } from "../redux/actions/teamActions";

const TeamList = props => {

    useEffect(() => {
        if (props.teams.length === 0) {
            props.fetchTeams();
        }
    }, [props, props.teams]);

    if (props.teams.length === 0) {
        return <h2>Loading...</h2>;
    } else {
        return (
            <div>
                <div className="team-list">
                    {props.teams.map(data => {
                        return <TeamCard key={data.id} data={data} />;
                    })}
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        teams: state.teams,
        isFetching: state.isFetching
    };
};

export default connect(mapStateToProps, { fetchTeams })(TeamList);