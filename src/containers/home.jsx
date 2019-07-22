import React from 'react';
import HomeComponent from '@/components/home/home.jsx';
import { getArticleList } from '@/api/article.js';

const cates = [
    { label: '全部文章', value: '' },
    { label: 'Web开发', value: 'web' },
    { label: 'NodeJs', value: 'node' },
    { label: '性能优化', value: 'optimize' }
]

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loading: true,
            type: ''
        }
        this.handleHistoryPush = this.handleHistoryPush.bind(this);
        this.HandleCates = this.HandleCates.bind(this);
    }
    componentDidMount() {
        this._getArticleList();
    }
    handleHistoryPush(id) {
        console.log(id)
        this.props.history.push(`/article/${id}`);
    }
    HandleCates(type) {
        this.setState({ type }, () => this._getArticleList());
    }
    _getArticleList() {
        this.setState({loading: true});
        getArticleList({ type: this.state.type, }).then(res => {
            this.setState({ data: res, loading: false })
        })
    }
    render() {
        console.log(this.state.loading)
        return (
            <HomeComponent
                onHistoryPush={this.handleHistoryPush}
                data={this.state.data}
                loading={this.state.loading}
                cates={cates}
                type={this.state.type}
                onCates={this.HandleCates}
            />
        )
    }
}

export default Home;