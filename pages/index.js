import React from 'react';
import PropTypes from 'prop-types';
import HomeComponent from '../components/home.js';
import { getArticleList } from '../src/api/article.js';
import { CATES } from '../src/utils/config.js';

class Home extends React.Component {

    static async getInitialProps() {
        const res = await getArticleList({ type: '', page: 1, q: '' })
        return { data: res.data }
    }

    render() {
        return (
            <HomeComponent
                cates={CATES}
                data={this.props.data}
            />
        )
    }
}

export default Home
  