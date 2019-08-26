import React from 'react';
import DetailComponent from '@/components/detail/detail.jsx';
import { getArticleDetail, addComment } from '@/api/article.js';
import { parseTime } from '@/utils';
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/tomorrow.css';

class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
            cover: '',
            time: '',
            name: '',
            email: '',
            comment: '',
            loading: true
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
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
        }
        );
        getArticleDetail(this.props.match.params.id).then(data => {
            this.setState({
                title: data.title,
                content: marked(data.content),
                loading: false,
                cover: data.cover,
                time: this._handleFormTime(data.createdAt)
            })
        })
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
        addComment({ name, email, comment, articleId: this.props.match.params.id }).then(data => {
            console.log(data)
        })
    }
    _handleFormTime(time) {
        let timeStamp = new Date(time).getTime()
        return parseTime(timeStamp);
    }
    render() {
        const { name, email, comment, cover, time, title, content, loading } = this.state;
        return (
            <DetailComponent
                name={name}
                email={email}
                comment={comment}
                cover={cover}
                time={time}
                title={title}
                content={content}
                loading={loading}
                onCommentChange={this.handleCommentChange}
                onEmailChange={this.handleEmailChange}
                onNameChange={this.handleNameChange}
                onSubmit={this.handleSubmit}
            />
        )
    }
}

export default Detail;