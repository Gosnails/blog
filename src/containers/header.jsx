import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import HeaderComponent from '@/components/header/header.jsx';
import { getArticleList } from '@/api/article.js';
import { setArticleList, setArticleKeywords, setArticlePageNum, setArticleLoading } from '@/reducers/article'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
        this.props.onArticleKeywords(event.target.value);
    }
    handleSearch() {
        this.props.history.push(`/`);
        this.props.onArticleLoading(true)
        getArticleList({ type: this.props.type, page: this.props.pageNum, q: this.props.keywords }).then(res => {
            this.props.onArticleLoading(false);
            this.props.onArticleList(res);
        })
    }
    render() {
        return (
            <HeaderComponent
                onSearch={this.handleSearch}
                onChange={this.handleChange}
                value={this.state.value}
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
    onArticleKeywords: (keywords) => dispatch(setArticleKeywords(keywords)),
    onArticlePageNum: (num) => dispatch(setArticlePageNum(num)),
    onArticleLoading: (bool) => dispatch(setArticleLoading(bool)),

});
const HeaderConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Header));

export default HeaderConnect;