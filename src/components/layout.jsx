import React from 'react';
import bindAll from 'lodash.bindall';
import Head from 'next/head'
import Router from 'next/router'
import Header from './header'
import BackTop from './back-top'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { thunkArticleList } from '../reducers/article'
import { BASE_IMG_URL } from '../utils/config.js';
import '../style/layout.css'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      expand: false,
      show: false
    }
    bindAll(this, ["handleChange", "handleSearch", "handleToggleExpand", "handleToggleSearch"]);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSearch(e) {
    if (e.keyCode === 13) {
      Router.push({
        pathname: '/search',
        query: { q: this.state.value }
      })
    }
  }
  handleToggleExpand() {
    if (this.state.expand) {
      this.setState({ expand: false });
      return;
    }
    this.setState({ expand: true });
  }

  handleToggleSearch() {
    if (this.state.show) {
      this.setState({ show: false });
      return;
    }
    this.setState({ show: true });
  }

  render() {
    const { children, title, path } = this.props;
    const { expand, show, value } = this.state;
    return (
      <div className="root">
        <Head>
          <title>{title}</title>
          <meta charSet='utf-8' />
          <link rel="icon" href={BASE_IMG_URL + 'favicon.png'} />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>

        <header>
          <Header
            path={path}
            expand={expand}
            show={show}
            value={value}
            onToggleExpand={this.handleToggleExpand}
            onToggleSearch={this.handleToggleSearch}
            onSearch={this.handleSearch}
            onChange={this.handleChange}
          />
        </header>

        <main className="content">
          {children}
        </main>

        <BackTop />

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