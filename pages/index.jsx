import React from 'react';
import PropTypes from 'prop-types';
import List from '../src/components/list';
import Classify from '../src/components/classify';
import Layout from '../src/components/layout';
import Loading from '../src/components/loading';
import { getArticleList } from '../src/api/article';
import { CATES } from '../src/utils/config';
import Router from 'next/router'

class Home extends React.Component {

    static async getInitialProps() {
        const res = await getArticleList()
        return { data: res.data }
    }

    constructor(props) {
        super(props)
        this.state = {
            data: props.data,
            type: '',
            page: 1,
            loading: false
        }
        this.handleHistoryPush = this.handleHistoryPush.bind(this)
        this.HandleCates = this.HandleCates.bind(this)
    }
    handleHistoryPush(id) {
        Router.push({
            pathname: '/post',
            query: { id }
        })
    }
    HandleCates(type) {
        if (type !== this.state.type) {
            this.setState({ type })
            this._getArticleList(type);
        }
    }
    _getArticleList(type) {
        this.setState({loading: true})
        getArticleList({ type, page: this.state.pageNum }).then(res => {
            this.setState({ data: res.data, loading: false })
        })
    }
    render() {
        const {type, data, loading} = this.state;

        return (
            <Layout title="首页">
                <Classify
                    cates={CATES}
                    type={type}
                    onCates={this.HandleCates}
                />
                {loading ? <Loading /> : (<List
                    data={data}
                    onHistoryPush={this.handleHistoryPush}
                />)}
            </Layout>
        )
    }
}

export default Home
