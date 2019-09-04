import React from 'react';
import PropTypes from 'prop-types';
import HeaderComponent from '../components/header.js';
import { getArticleList } from '../src/api/article.js';

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
                this.props.onArticleList(res.data);
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

export default Header;