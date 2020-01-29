import React, { useState, useEffect } from "react";
import TeamCard from "./TeamCard";
// import { connect } from "react-redux";
// import {  } from "../utils/actions";

const TeamList = props => {

    // useEffect(() => {
    //     if (props.teams.length === 0) {
    //         props.fetchTeams();
    //     }
    // }, [props, props.teams]);

    // if (props.teams.length === 0) {
    //     return <h2>Loading...</h2>;
    // } else {
        return (
            <div className="teams-list">
                {teams.map(data => {
                    return <TeamCard key={data.id} data={data} />;
                })}
            </div>
        );
    // }
};

// const mapStateToProps = state => {
//   return {
//     isFetching: state.isFetching
//   };
// };

// export default connect(mapStateToProps, { })(TeamList);

export default TeamList;