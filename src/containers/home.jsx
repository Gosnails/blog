import React from 'react';
import HomeComponent from '@/components/home/home.jsx';
import { getArticleList } from '@/api/article.js';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loading: true
        }
        this.handleHistoryPush = this.handleHistoryPush.bind(this);
    }
    componentDidMount() {
        getArticleList().then(res => {
            this.setState({ data: res, loading: false })
        })
    }
    handleHistoryPush(id) {
        console.log(id)
        this.props.history.push(`/article/${id}`);
    }
    render() {
        console.log(this.state.loading)
        return (
            <HomeComponent
                onHistoryPush={this.handleHistoryPush}
                data={this.state.data}
                loading={this.state.loading}
            />
        )
    }
}

export default Home;