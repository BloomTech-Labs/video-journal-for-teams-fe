import React from "react";
import { connect } from "react-redux";

const TeamCard = props => {

    return (
        <div className="card-container">
            <div className="card-content">
                <h1>{props.name}</h1>
                <h2>{props.description}</h2>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isUpdating: state.isUpdating
    };
};
export default connect(mapStateToProps, {})(TeamCard);