import React from 'react';
import HomeComponent from '@/components/home/home.jsx';
import { getArticleList } from '@/api/article.js';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.handleHistoryPush = this.handleHistoryPush.bind(this);
    }
    componentDidMount() {
        getArticleList().then(res => {
            this.setState({ data: res })
        })
    }
    handleHistoryPush(id) {
        console.log(id)
        this.props.history.push(`/article/${id}`);
    }
    render() {
        return (
            <HomeComponent
                onHistoryPush={this.handleHistoryPush}
                data={this.state.data}
            />
        )
    }
}

export default Home;