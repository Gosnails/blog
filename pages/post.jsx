import React from 'react';
import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import Article from '../src/components/article';
import Comment from '../src/components/comment';
import Catalogue from '../src/components/catalogue';
import Layout from '../src/components/layout';
import { getArticleDetail, addComment, getComment } from '../src/api/article.js';
import { parseTime } from '../src/utils';
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/tomorrow.css';

class Post extends React.Component {

    static async getInitialProps({ ctx }) {
        marked.setOptions({
            renderer: new marked.Renderer(),
            highlight: function (code) {
                return hljs.highlightAuto(code).value;
            },
            pedantic: false,
            gfm: true,
            tables: true,
            breaks: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            xhtml: false
        });
        const pathname = ctx.pathname
        const id = ctx.query.id;
        const data = await getArticleDetail(id);
        data.content = marked(data.content);
        return { data, id, pathname }
    }

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            comment: '',
            hashValue: '',
            commentList: [],
            catalogueList: []
        }
        this.catalogueOffsetTop = [];
        bindAll(this, ["handleNameChange", "handleScroll", "handleHashChange", "handleEmailChange", "handleCommentChange", "handleSubmit"]);
    }
    componentDidMount() {
        const catalogueList = this.props.data.content.match(/<h[^>]+>/g).map(item => ({
            tag: item.substr(2, 1),
            value: item.match(/".+"/)[0].replace(/[/"]/g, '')
        }));
        this._getComment();
        this.handleCatalogueRecord(catalogueList);
        this.handleGetAstTree(catalogueList);
        window.addEventListener('hashchange', this.handleHashChange);
        window.addEventListener('scroll', this.handleScroll);
        this.handleHashChange();
        setTimeout(() => {
            this.handleScrollTo();
        }, 500);
        
    }
    handleGetAstTree(catalogueList) {
        let copyHdata = JSON.parse(JSON.stringify(catalogueList)).map(item => item.tag);
        copyHdata.sort((a, b) => a.tag - b.tag);
        copyHdata = Array.from(new Set(copyHdata)).map((item, index) => ({tag: item, level: index + 1}));
        for(let i = 0; i < catalogueList.length; i++) {
            for(let j = 0; j < copyHdata.length; j++) {
                if (catalogueList[i].tag === copyHdata[j].tag) {
                    catalogueList[i].level = copyHdata[j].level;
                    break;
                }
            }
        }
        this.setState({catalogueList});
    }
    handleCatalogueRecord(catalogueList) {
        for(let i = 0; i< catalogueList.length; i++) {
            const element = document.getElementById(catalogueList[i].value)
            this.catalogueOffsetTop.push({
                offsetTop: element.offsetTop,
                value: element.getAttribute('id')
            });
        }
    }
    handleScrollTo() {
        const hashMatch = window.location.hash.match(/#(.+)/);
        if (hashMatch) {
            const hashValue = decodeURI(hashMatch[1]);
            for(let i = 0; i < this.catalogueOffsetTop.length; i++) {
                if (hashValue === this.catalogueOffsetTop[i].value) {
                    window.scrollTo(0, this.catalogueOffsetTop[i].offsetTop);
                    break;
                }
            }
        }
    }
    handleScroll() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        for(let i = this.catalogueOffsetTop.length - 1; i >= 0; i--) {
            if (scrollTop >= this.catalogueOffsetTop[i].offsetTop - 60) {
                this.setState({hashValue: this.catalogueOffsetTop[i].value});
                break;
            }
        }
        if (scrollTop < this.catalogueOffsetTop[0].offsetTop) {
            this.setState({hashValue: ''});
        }
    }
    componentWillUnmount () {
        window.removeEventListener('hashchange', this.handleHashChange);
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleHashChange() {
        const hashMatch = window.location.hash.match(/#(.+)/);
        this.setState({hashValue: hashMatch ? decodeURI(hashMatch[1]) : ''})
    }
    handleCommentChange(event) {
        this.setState({ comment: event.target.value });
    }
    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }
    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    handleSubmit() {
        const { name, email, comment } = this.state
        addComment({ name, email, content: comment, articleId: this.props.id }).then(data => {
            this.setState({ name: '', email: '', comment: '' });
            this._getComment();
        })
    }
    _getComment() {
        getComment({ articleId: this.props.id }).then(res => {
            for (let i = 0; i < res.length; i++) {
                res[i].createdAt = this._handleFormTime(res[i].createdAt)
            }
            this.setState({ commentList: res })
        })
    }
    _handleFormTime(time) {
        let timeStamp = new Date(time).getTime();
        return parseTime(timeStamp);
    }
    render() {
        const { cover, createdAt, title, content } = this.props.data;
        const { name, email, comment, commentList, catalogueList, hashValue } = this.state;
        return (
            <Layout title={title} path={this.props.pathname}>
                <Article
                    cover={cover}
                    time={this._handleFormTime(createdAt)}
                    title={title}
                    content={content}
                />
                <Catalogue hashValue={hashValue} catalogueList={catalogueList} />
                <Comment
                    name={name}
                    email={email}
                    comment={comment}
                    commentList={commentList}
                    onCommentChange={this.handleCommentChange}
                    onEmailChange={this.handleEmailChange}
                    onNameChange={this.handleNameChange}
                    onSubmit={this.handleSubmit}
                />
            </Layout>
        )
    }
}

Post.propTypes = {
    cover: PropTypes.string,
    time: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
}

export default Post;