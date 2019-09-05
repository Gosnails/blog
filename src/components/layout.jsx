import React from 'react';
import Head from 'next/head'
import Header from './header'
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
    // this.props.onArticleKeywords(event.target.value);
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

export default Layout;