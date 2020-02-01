import React from "react";
import { connect } from "react-redux";
import { Card } from 'antd';


const TeamCard = props => {

    return (
        <Card className="teamCard" size="small">
                <p>{props.data.name}</p>
                <p>{props.data.description}</p>
        </Card>
    );
};

const mapStateToProps = state => {
    return {
        isUpdating: state.isUpdating
    };
};
export default connect(mapStateToProps, {})(TeamCard);