import React from 'react';
import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import Router from 'next/router'
import { connect } from 'react-redux'
import List from '../src/components/list';
import Layout from '../src/components/layout';
import SearchTit from '../src/components/search-tit';
import { thunkArticleList, setArticleSite } from '../src/reducers/article'

class Search extends React.Component {

    static async getInitialProps({ reduxStore, ctx }) {
        const pathname = ctx.pathname;
        const q = ctx.query.q;
        reduxStore.dispatch(setArticleSite(''));
        await reduxStore.dispatch(thunkArticleList({ q }, true));
        return { q, pathname }
    }

    constructor(props) {
        super(props)
        bindAll(this, ["handleHistoryPush"]);
    }
    handleHistoryPush(id) {
        Router.push({
            pathname: '/post',
            query: { id }
        })
    }
    render() {
        const { articleList, q, pathname } = this.props;
        return (
            <Layout title="搜索" path={pathname}>
                <SearchTit
                    q={q}
                    num={articleList.length}
                />
                <List
                    data={articleList}
                    onHistoryPush={this.handleHistoryPush}
                />
            </Layout>
        )
    }
}

Search.propTypes = {
    articleList: PropTypes.array
}

const mapStateToProps = state => ({
    articleList: state.article.articleList
});

const SearchConnect = connect(
    mapStateToProps
)(Search);

export default SearchConnect
