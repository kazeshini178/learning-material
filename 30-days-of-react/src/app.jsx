import Header from './header';
import Content from './content';

class App extends React.Component {
    render() {
        return (
            <div className="notificationFrame">
                <div className="panel">
                    <Header />
                    <Content />
                </div>
            </div>
        );
    }
}