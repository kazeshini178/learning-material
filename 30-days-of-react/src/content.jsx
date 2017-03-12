import ActivityItem from './activityItem';

class Content extends React.Component {
    render() {
        const { activities } = this.props;

        return (
            <div className="content">
                <div className="line"></div>
                {
                    activities.map((activity) =>
                        <ActivityItem activity="{activity}" />)
                }
            </div>
        )
    }
}