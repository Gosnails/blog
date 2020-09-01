import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import List from '../src/components/list';
import Classify from '../src/components/classify';
import Layout from '../src/components/layout';
import Loading from '../src/components/loading';
import { CATES } from '../src/utils/config';
import { thunkArticleList } from '../src/reducers/article';
import InfiniteScroll from 'react-infinite-scroller';

class Home extends React.Component {

    static async getInitialProps({ reduxStore, ctx }) {
        const pathname = ctx.pathname
        await reduxStore.dispatch(thunkArticleList());
        return { pathname }
    }

    constructor(props) {
        super(props)
        this.state = {
            type: '',
            page: 2,
            pageSize: 10,
            hasMoreData: true,
            total: props.total
        }
        this.isCan = true;
        this.HandleCates = this.HandleCates.bind(this)
        this.loadFunc = this.loadFunc.bind(this)
    }
    HandleCates(type) {
        if (type !== this.state.type) {
            this.setState({ type, page: 1 }, () => {
                this.loadFunc();
            })
        }
    }
    async loadFunc() {
        if (!this.isCan) {
            return
        }
        this.isCan = false
        const { type, pageSize, page } = this.state;
        const boolean = page === 1 ? false : true;
        await this.props.onArticleList({ type, page }, boolean, boolean);
        const hasMoreData = page * pageSize < this.props.total ? true : false;
        this.setState({page: page + 1, total: this.props.total, hasMoreData});
        this.isCan = true;
    }
    render() {
        const { type, page, hasMoreData } = this.state;
        const { articleList, loading, pathname } = this.props;
        return (
            <Layout title="首页" path={pathname}>
                <Classify
                    cates={CATES}
                    type={type}
                    onCates={this.HandleCates}
                />
                {loading ? <Loading /> : (<InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadFunc}
                    hasMore={hasMoreData}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                >
                    <List data={articleList} />
                </InfiniteScroll>)}
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
    loading: state.article.loading,
    total: state.article.total
});

const mapDispatchToProps = dispatch => ({
    onArticleList: (params, isLoading, isJoin) => dispatch(thunkArticleList(params, isLoading, isJoin))
});
const HomeConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeConnect
