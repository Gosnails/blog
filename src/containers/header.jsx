import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import HeaderComponent from '@/components/header/header.jsx';
import { getArticleList } from '@/api/article.js';
import { setArticleList, setArticleKeywords, setArticlePageNum, setArticleLoading } from '@/reducers/article'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            expand: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
        this.props.onArticleKeywords(event.target.value);
    }
    handleSearch(e) {
        if (e.keyCode === 13) {
            this.props.history.push(`/`);
            this.props.onArticleLoading(true)
            getArticleList({ type: this.props.type, page: this.props.pageNum, q: this.props.keywords }).then(res => {
                this.props.onArticleLoading(false);
                this.props.onArticleList(res);
            })
        }
    }
    handleToggle() {
        if (this.state.expand) {
            this.setState({ expand: false });
            return;
        }
        this.setState({ expand: true });
    }
    render() {
        return (
            <HeaderComponent
                onToggle={this.handleToggle}
                onSearch={this.handleSearch}
                onChange={this.handleChange}
                expand={this.state.expand}
                value={this.state.value}
            />
        )
    }
}

Header.propTypes = {
    articleList: PropTypes.array.isRequired,
    keywords: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    pageNum: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    onArticleList: PropTypes.func,
    onArticleKeywords: PropTypes.func,
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
    onArticleKeywords: (keywords) => dispatch(setArticleKeywords(keywords)),
    onArticlePageNum: (num) => dispatch(setArticlePageNum(num)),
    onArticleLoading: (bool) => dispatch(setArticleLoading(bool))
});
const HeaderConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Header));

export default HeaderConnect;