import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Router from 'next/router'
import List from '../src/components/list';
import Classify from '../src/components/classify';
import Layout from '../src/components/layout';
import Loading from '../src/components/loading';
import { getArticleList } from '../src/api/article';
import { CATES } from '../src/utils/config';
import { thunkArticleList } from '../src/reducers/article'

class Home extends React.Component {

    static async getInitialProps({reduxStore}) {
        const onArticleList = () => reduxStore.dispatch(thunkArticleList());
        reduxStore.dispatch({type: 'blog/article/add'})
        const articleList = await onArticleList();
        return {}
    }

    constructor(props) {
        console.log(props)
        super(props)
        this.state = {
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
        // this.setState({loading: true})
        this.props.onArticleList({ type, page: this.state.pageNum })
        // getArticleList().then(res => {
        //     this.setState({ data: res.data, loading: false })
        // })
    }
    render() {
        const {type, loading} = this.state;
        return (
            <Layout title="首页">
                <Classify
                    cates={CATES}
                    type={type}
                    onCates={this.HandleCates}
                />
                {loading ? <Loading /> : (<List
                    data={this.props.articleList}
                    onHistoryPush={this.handleHistoryPush}
                />)}
            </Layout>
        )
    }
}


const mapStateToProps = state => ({
    articleList: state.article.articleList,
    count: state.article.count
});

const mapDispatchToProps = dispatch => ({
    onArticleList: (params) => dispatch(thunkArticleList(params))
});
const HomeConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeConnect
