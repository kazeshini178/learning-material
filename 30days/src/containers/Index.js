import React from 'react';
import { Route } from 'react-router-dom';
import { Navbar } from '../components/Nav/Navbar';

const Home = () => (<div><h1>Welcome Home</h1></div>);
const About = () => (<div><h1>About</h1></div>);

export class Index extends React.Component {
    render() {
        return (
            <div className="app">
                <Navbar />
                <div className="page">
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                </div>
            </div>
        )
    }
}

export default Index;