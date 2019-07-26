import React from 'react';
import { connect } from 'react-redux';
import HomeComponent from '@/components/home/home.jsx';
import { getArticleList } from '@/api/article.js';
import { setArticleList, setArticleCates, setArticlePageNum, setArticleLoading } from '@/reducers/article'

const CATES = [
    { label: '全部文章', value: '' },
    { label: 'Web开发', value: 'web' },
    { label: 'NodeJs', value: 'node' },
    { label: '性能优化', value: 'optimize' },
    { label: '项目总结', value: 'summary' }
]

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
            this.props.onArticleList(res);
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