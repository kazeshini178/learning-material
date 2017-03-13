import Header from './header';
import Content from './content';

class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = { refreshing: false };
    }

    refresh() {
        this.setState({ refreshing: true });
    }

    onComponentRefresh() {
        this.setState({ refreshing: false });
    }

    render(){
        const {refreshing}= this.state;

        return (
            <Panel>
                <Header title="Github Activity" />
                <Content
                    onComponentRefresh={this.onComponentRefresh.bind(this)}
                    requestRefresh={refreshing}
                    fetchData={fetchEvents} />

                <Footer>
                    <button onClick={this.refresh.bind(this)}>
                        <i className="fa fa-refresh"/>
                        Refresh
                    </button>
                </Footer>
            </Panel>
        )
    }
}