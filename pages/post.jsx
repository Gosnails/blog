import React from 'react';
import Article from '../src/components/article';
import Comment from '../src/components/comment';
import Layout from '../src/components/layout';
import { getArticleDetail, addComment, getComment } from '../src/api/article.js';
import { parseTime } from '../src/utils';
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/tomorrow.css';

class Post extends React.Component {

    static async getInitialProps({ query }) {
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
        const id = query.id;
        const data = await getArticleDetail(query.id);
        data.content = marked(data.content);
        return { data, id }
    }

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            comment: '',
            commentList: []
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this._getComment();
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
        const { name, email, comment, commentList } = this.state;
        return (
            <Layout title={title}>
                <Article
                    cover={cover}
                    time={this._handleFormTime(createdAt)}
                    title={title}
                    content={content}
                />
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

export default Post;