import React from "react";
import "../App.css";
// import { connect } from "react-redux";
// import {  } from "../utils/actions";

const TeamCard = () => {

    return (
        <div className="team-card">
            <div className="team-image">
                <img src={Image} alt="team-img" />
            </div>
            <div className="team-info">
                <h1>Team Name: Bit Wolf</h1>
                <h2>Team Description: Lorem Ipsum</h2>
            </div>
        </div>
    );
};

// const mapStateToProps = state => {
//   return {
//     isUpdating: state.isUpdating
//   };
// };
// export default connect(mapStateToProps, { })(TeamCard);

export default TeamCard;