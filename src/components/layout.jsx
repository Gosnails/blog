import React from 'react';
import Head from 'next/head'
import Router from 'next/router'
import Header from './header'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { thunkArticleList } from '../reducers/article'
import './layout.css'

class Layout extends React.Component {
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
  }
  handleSearch(e) {
    if (e.keyCode === 13) {
      // Router.push({
      //   pathname: '/'
      // })
      this.props.onArticleList({q: this.state.value})
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
    const { children, title } = this.props;
    const { expand, value } = this.state;
    return (
      <div className="root">
        <Head>
          <title>{title}</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>

        <header>
          <Header
            expand={expand}
            value={value}
            onToggle={this.handleToggle}
            onSearch={this.handleSearch}
            onChange={this.handleChange}
          />
        </header>

        <main className="content">
          {children}
        </main>

      </div>
    )
  }
}

Layout.propTypes = {
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
const LayoutConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);

export default LayoutConnect;