import Header from './header';
import Content from './content';

const rootUtl = 'https://api.github.com';
const endpoint = '/users/fullstackreact/events';

export class Panel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            searchFilter: '',
            activities: []
        }
    }

    componentDidMount() {
        this.updateData();
    }
    componentWillRecieveProps(nextProps) {
        if (nextProp.requestRefresh !== this.props.requestRefresh) {
            this.setState({ loading: true }, this.updateData);
        }
    }

    updateData() {
        const { activities, searchFilter } = this.state;

        const filter = searchFilter != '' &&
            (e => e.actor.login.match(new RegExp(searchFilter)));

        json = activities.filter(filter);
        if (activities.length === 0) {
            this.setState({ activities: json });
        }

        return json;
        // this.setState({
        //     loading: false,
        //     activities: data
        // }, this.props.onComponentRefresh);
    }

    onComponentRefresh() {
        this.setState({ loading: true });
    }

    handleSearch(val) {
        this.setState({
            searchFilter: val,
            loading: true
        });
    }

    render() {
        const { loading, activities } = this.state;

        return (
            <div className="panel">
                <Header
                    title="Github activity" />
                <Content
                    requestRefresh={loading}
                    onComponentRefresh={this.onComponentRefresh.bind(this)}
                    fetchData={this.updateData.bind(this)} />
            </div>
        )
    }
}