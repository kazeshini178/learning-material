import ActivityItem from './activityItem';

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            activities: []
        };
    }

    componentDidMount() {
        this.updateData();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.requestRefresh !== this.props.requestRefresh) {
            this.setState({
                loading: true
            }, this.updateData);
        }
    }

    updateData() {
        this.setState({
            loading: false,
            activities: data
        }, this.props.onComponentRefresh);
    }

    render() {
        const { loading, activities } = this.props;

        return (
            <div className="content">
                <div className="line"></div>
                {loading && <div>Loading</div>}
                {
                    activities.map((activity) =>
                        <ActivityItem activity="{activity}" />)
                }
            </div>
        )
    }
}