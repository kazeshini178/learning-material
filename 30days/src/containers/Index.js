import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar } from '../components/Nav/Navbar';
import { Home } from '../views/Home';

const About = () => (<div><h1>About</h1></div>);

export class Index extends React.Component {
    render() {
        const { currentUser } = this.props;
        return (
            <div className="app">
                <Navbar currentUser={currentUser} />
                <div className="page">
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    currentUser: state.currentUser
}))(Index);