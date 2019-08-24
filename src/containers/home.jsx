import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HomeComponent from '@/components/home/home.jsx';
import { getArticleList } from '@/api/article.js';
import { CATES } from '@/utils/config.js';
import { setArticleList, setArticleCates, setArticlePageNum, setArticleLoading } from '@/reducers/article'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loading: true,
            type: '',
            page: 1
        }
        this.handleHistoryPush = this.handleHistoryPush.bind(this);
        this.HandleCates = this.HandleCates.bind(this);
    }
    componentDidMount() {
        this._getArticleList();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.type !== this.props.type) {
            this._getArticleList();
        }
    }
    handleHistoryPush(id) {
        this.props.history.push(`/article/${id}`);
    }
    HandleCates(type) {
        this.props.onArticleCates(type);
    }
    _getArticleList() {
        this.props.onArticleLoading(true)
        getArticleList({ type: this.props.type, page: this.props.pageNum, q: this.props.keywords }).then(res => {
            this.props.onArticleLoading(false);
            this.props.onArticleList(res.data);
        })
    }
    render() {
        return (
            <HomeComponent
                cates={CATES}
                data={this.props.articleList}
                loading={this.props.loading}
                type={this.props.type}
                onHistoryPush={this.handleHistoryPush}
                onCates={this.HandleCates}
            />
        )
    }
}

Home.propTypes = {
    articleList: PropTypes.array.isRequired,
    keywords: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    pageNum: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    onArticleList: PropTypes.func,
    onArticleCates: PropTypes.func,
    onArticlePageNum: PropTypes.func,
    onArticleLoading: PropTypes.func
}

const mapStateToProps = state => ({
    articleList: state.article.articleList,
    keywords: state.article.keywords,
    type: state.article.type,
    pageNum: state.article.pageNum,
    loading: state.article.loading
});

const mapDispatchToProps = dispatch => ({
    onArticleList: (list) => dispatch(setArticleList(list)),
    onArticleCates: (type) => dispatch(setArticleCates(type)),
    onArticlePageNum: (num) => dispatch(setArticlePageNum(num)),
    onArticleLoading: (bool) => dispatch(setArticleLoading(bool))
});
const HomeConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeConnect;