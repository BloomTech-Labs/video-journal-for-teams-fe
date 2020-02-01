import React from "react";
import { connect } from "react-redux";
import { Layout } from 'antd';


const TeamCard = props => {

    return (
        <div className="card-container">
            <div className="card-content">
                <h1>Team Name:{props.data.name}</h1>
                <p>Description: {props.data.description}</p>
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