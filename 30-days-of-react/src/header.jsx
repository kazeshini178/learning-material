import SearchForm from './searchForm';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchVisible: false
        };
    }

    showSearch() {
        this.setState({
            searchVisible: !this.state.searchVisible
        });
    }

    handleSearch(val) {
        this.props.onSearch(val);
    }

    render() {
        return (
            <div className="header">
                <div className="fa fa-more"></div>

                <span className="title">{this.props.title}</span>

                <SearchForm
                    searchVisible={this.state.searchVisible}
                    onSubmit={this.handleSearch.bind(this)} />
                <div
                    onClick={this.showSearch.bind(this)}
                    className="fa fa-search searchIcon"></div>
            </div>
        )
    }
}

Header.propTypes = {
    onSearch: React.propTypes.func
}