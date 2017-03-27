import React from 'react';
import { connect } from 'react-redux';

export const Home = ({ currentTime, actions }) => {
    return (
        <div className="content">
            <h1>Welcome home!</h1>
            <p>The time is {currentTime.toString()}</p>
            <button onClick={actions.currentTime.updateTime}>
                update
            </button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        currentTime: state.currentTime
    }
}
export default connect(
    mapStateToProps
)(Home);