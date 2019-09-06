import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Router from 'next/router'
import List from '../src/components/list';
import Classify from '../src/components/classify';
import Layout from '../src/components/layout';
import Loading from '../src/components/loading';
import { CATES } from '../src/utils/config';
import { thunkArticleList } from '../src/reducers/article'

class Home extends React.Component {

    static async getInitialProps({ reduxStore }) {
        await reduxStore.dispatch(thunkArticleList());
        return {}
    }

    constructor(props) {
        super(props)
        this.state = {
            type: '',
            page: 1
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
        // this.props.onArticleLoading()
        this.props.onArticleList({ type, page: this.state.page })
    }
    render() {
        const { type } = this.state;
        const { articleList, loading } = this.props;
        return (
            <Layout title="首页">
                <Classify
                    cates={CATES}
                    type={type}
                    onCates={this.HandleCates}
                />
                {loading ? <Loading /> : (<List
                    data={articleList}
                    onHistoryPush={this.handleHistoryPush}
                />)}
            </Layout>
        )
    }
}

Home.propTypes = {
    articleList: PropTypes.array,
    loading: PropTypes.bool,
    onArticleList: PropTypes.func
}

const mapStateToProps = state => ({
    articleList: state.article.articleList,
    loading: state.article.loading
});

const mapDispatchToProps = dispatch => ({
    onArticleList: (params) => dispatch(thunkArticleList(params))
});
const HomeConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeConnect
