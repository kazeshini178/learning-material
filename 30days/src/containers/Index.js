import React from 'react';
import { connect } from 'react-redux';
import { Navbar } from '../components/Nav/Navbar';

export class Index extends React.Component {
    render() {
        const { currentUser } = this.props;
        return (
            <div className="app">
                <Navbar currentUser={currentUser} />
                <div className="page">
                    {this.prop.children}
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    currentUser: state.currentUser
}))(Index);