import React from 'react';
import DetailComponent from '@/components/detail/detail.jsx';
import { getArticleDetail } from '@/api/article.js';
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: ''
        }
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
                content: marked(data.content)
            })
        })
    }
    render() {
        return (
            <DetailComponent title={this.state.title} content={this.state.content} />
        )
    }
}

export default Detail;